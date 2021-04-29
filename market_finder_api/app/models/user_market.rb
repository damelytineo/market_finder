class UserMarket < ApplicationRecord
    belongs_to :user
    belongs_to :market

    validates_presence_of :user_id, :market_id
end
