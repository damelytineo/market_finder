# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :market, Types::MarketType, null: true do
      argument :id, ID, required: true
    end

    field :markets, [Types::MarketType], null: true do
      argument :borough, String, required: false
      argument :page, Int, required: true
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

    def markets(borough: nil, page:, open: false)
      markets = Market.all
      if markets
        markets = filter_by_borough(markets, borough)

        markets = filter_by_open_status(markets, open)

        paginate(markets, page)
      end
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

    def paginate(markets, page)
      markets.limit(10).offset((page - 1) * 10)
    end
  end
end
