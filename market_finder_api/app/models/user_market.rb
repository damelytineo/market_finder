# frozen_string_literal: true

class UserMarket < ApplicationRecord
  belongs_to :user
  belongs_to :market

  validates_presence_of :user_id, :market_id
  validates :market_id, uniqueness: { scope: :user_id, message: 'Market has already been added to this profile' }
end
