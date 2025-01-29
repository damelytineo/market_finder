# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :market, Types::MarketType, null: true do
      argument :id, ID, required: true
    end

    field :markets, Types::MarketType.connection_type, null: false do
      argument :borough, String, required: false
      argument :open, Boolean, required: false
    end

    field :user, Types::UserType, null: true do
      argument :id, ID, required: true
    end

    field :user_by_email, Types::UserType, null: true do
      argument :email, String, required: true
    end

    field :users, [Types::UserType], null: true

    def market(id:)
      Market.find(id)
    end

    def markets(args)
      markets = Market.all
      borough = args[:borough]
      open = args[:open]
      first = args[:first]
      after = args[:after]
      if markets
        markets = filter_by_borough(markets, borough)

        markets = filter_by_open_status(markets, open)

        if after
          markets = markets.where("id > ?", after)
        end

        if first
          markets = markets.limit(first)
        end
      end

      connection = GraphQL::Pagination::Connection.new(markets, first, after)

      connection
    end

    def user(id:)
      User.find(id)
    end

    def user_by_email(email:)
      User.find_by(email: email)
    end

    def users
      User.all
    end

    private

    def filter_by_borough(markets, borough)
      boroughs = ["Manhattan", "Brooklyn", "Queens", "Staten Island", "Bronx"]
      if boroughs.include?(borough)
        markets = markets.where(borough: borough)
      end
      markets
    end

    def filter_by_open_status(markets, open)
      return markets unless open

      current_time = Time.now
      markets.where("open_time <= ?", current_time).where("close_time >= ?", current_time)
    end
  end
end
