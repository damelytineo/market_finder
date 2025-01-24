# frozen_string_literal: true

module Types
  class MarketType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :borough, String, null: false
    field :street_address, String, null: false
    field :district, Integer, null: true
    field :latitude, Float, null: true
    field :longitude, Float, null: true
    field :days_of_operation, String, null: true
    field :hours, String, null: true
    field :ebt_accepted, String, null: true
    field :season_begin, GraphQL::Types::ISO8601Date, null: true
    field :season_end, GraphQL::Types::ISO8601Date, null: true
    field :open_time, GraphQL::Types::ISO8601DateTime, null: true
    field :close_time, GraphQL::Types::ISO8601DateTime, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :users, [Types::UserType], null: true

    def users
      object.users
    end
  end
end
