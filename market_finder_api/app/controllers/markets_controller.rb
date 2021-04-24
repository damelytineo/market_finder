class MarketsController < ApplicationController
    def index 

    response = RestClient.get 'https://data.cityofnewyork.us/resource/8vwk-6iz2.json'
    json = JSON.parse(response)

        json.each do |market|
            Market.create(
            name: market["marketname"],
            borough: market["borough"],
            street_address: market["streetaddress"],
            district: market["community_district"],
            latitude: market["latitude"],
            longitude: market["longitude"],
            days_of_operation: market["daysoperation"],
            hours: market["hoursoperations"],
            season_dates: market["seasondates"]
            )
        end
        
        render({json: Market.all})
    end
end
