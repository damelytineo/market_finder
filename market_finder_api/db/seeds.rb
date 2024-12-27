# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create!(username: 'tester123', email: 'test@test.com', password: '123456')

response = RestClient.get 'https://data.cityofnewyork.us/resource/8vwk-6iz2.json'
json = JSON.parse(response)

json.each do |market|
  Market.create(
    name: market['marketname'],
    borough: market['borough'],
    street_address: market['streetaddress'],
    district: market['community_district'],
    latitude: market['latitude'],
    longitude: market['longitude'],
    days_of_operation: market['daysoperation'],
    hours: market['hoursoperations'],
    season_dates: market['seasondates']
  )
end
