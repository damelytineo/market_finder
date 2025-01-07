# frozen_string_literal: true

class UserPolicy < ApplicationPolicy
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def create?
    user.present? && record.id == user.id
  end

  def index?
    user.present? && record.id == user.id
  end
end
