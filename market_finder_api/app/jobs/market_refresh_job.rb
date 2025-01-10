# frozen_string_literal: true

class MarketRefreshJob
  include Sidekiq::Worker
  sidekiq_options queue: :default, retry: false

  def perform
    markets = fetched_markets_from_api

    markets.each do |market|
      Market.find_or_create_by!(market_id: market['market_id']) do |m|
        m.update(
          name: market['market_name'],
          borough: market['borough'],
          address: market['address'],
          latitude: market['latitude'],
          longitude: market['longitude']
        )
      end
    end

    Rails.cache.delete(:cached_markets)
  end

  private

  def fetched_markets_from_api
    response = HTTParty.get('https://data.cityofnewyork.us/resource/8vwk-6iz2.json')
    if response.success?
      JSON.parse(response.body)
    else
      raise 'Failed to fetch markets data from API'
    end
  end
end
