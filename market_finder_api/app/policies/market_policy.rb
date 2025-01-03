# frozen_string_literal: true

class MarketPolicy
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def index?
    user.present? && record.id == user.id
  end
end
