class MarketsController < ApplicationController
    def index 
        response = RestClient.get 'https://data.cityofnewyork.us/resource/8vwk-6iz2.json'
        json = JSON.parse response 

        if !json.nil?
            json["data"].map do |market| 
                Market.create(name: "#{market["name"]}", borough: "#{market["borough"]}", street_address: "#{market["street_address"]}")
            end
        else 
            puts "error getting markets"
        end
    end
end
