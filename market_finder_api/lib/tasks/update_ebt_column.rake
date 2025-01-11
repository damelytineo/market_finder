# frozen_string_literal: true

namespace :ebt_column do
  desc 'Update EBT column in the markets table'
  task update_ebt_column: :environment do
    response = RestClient.get 'https://data.cityofnewyork.us/resource/8vwk-6iz2.json'
    markets = JSON.parse(response)

    markets.each do |market_data|
      market = Market.find_or_initialize_by(
        latitude: market_data['latitude'],
        longitude: market_data['longitude'],
        name: market_data['marketname']
      )

      if market.new_record?
        market.assign_attributes(
          name: market_data['marketname'],
          borough: market_data['borough'],
          street_address: market_data['streetaddress'],
          district: market_data['community_district'],
          latitude: market_data['latitude'],
          longitude: market_data['longitude'],
          days_of_operation: market_data['daysoperation'],
          hours: market_data['hoursoperation'],
          season_dates: market_data['seasondates'],
          ebt_accepted: market_data['accepts_ebt']
        )
      else
        market.ebt_accepted = market_data['accepts_ebt']
      end

      puts "Error saving market #{market.name}: #{market.errors.full_messages.join(', ')}" unless market.save
    end
  end
end
