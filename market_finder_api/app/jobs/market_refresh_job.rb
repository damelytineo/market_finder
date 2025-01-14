# frozen_string_literal: true

class MarketRefreshJob
  include Sidekiq::Worker
  sidekiq_options queue: :default, retry: false

  def perform
    markets = fetched_markets_from_api

    markets.each do |market_data|
      market = Market.find_or_initialize_by(
        latitude: market_data['latitude'],
        longitude: market_data['longitude'],
        name: market_data['marketname']
      )

      if market.new_record?
        # Parse hours to get open and closing times
        times = market_data['hoursoperations'].split('-').map(&:strip)

        if times.size >= 2
          begin
            open_time = Time.parse(times[0])
            close_time = Time.parse(times[1])
          rescue ArgumentError => e
            Rails.logger.warn "Failed to parse hours for Market ID #{market.id}: #{e.message}"
          end
        else
          Rails.logger.warn "Market ID #{market.id} has an invalid hours format: #{market.hours}"
        end

        market.assign_attributes(
          name: market_data['marketname'],
          borough: market_data['borough'],
          street_address: market_data['streetaddress'],
          district: market_data['community_district'],
          latitude: market_data['latitude'],
          longitude: market_data['longitude'],
          days_of_operation: market_data['daysoperation'],
          hours: market_data['hoursoperation'],
          ebt_accepted: market_data['accepts_ebt'],
          season_begin: market_data['season_begin'],
          season_end: market_data['season_end'],
          open_time: open_time,
          close_time: close_time
        )
      end

      unless market.save
        Rails.logger.error("Error saving market #{market.name}: #{market.errors.full_messages.join(', ')}")
      end
    end

    Rails.cache.delete(:cached_markets)
  end

  private

  def fetched_markets_from_api
    response = RestClient.get('https://data.cityofnewyork.us/resource/8vwk-6iz2.json')
    if response.code == 200
      JSON.parse(response.body)
    else
      Rails.logger.error('Failed to fetch markets data from API')
      []
    end
  end
end
