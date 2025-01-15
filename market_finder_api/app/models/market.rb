# frozen_string_literal: true

class Market < ApplicationRecord
  has_many :user_markets
  has_many :users, through: :user_markets

  # find open markets
  scope :currently_open, lambda {
    current_time = Time.current
    current_day = current_time.strftime('%A')

    where('days_of_operation ILIKE ?', "%#{current_day}%")
      .where('open_time <= ? AND close_time >= ?', current_time, current_time)
  }
end
