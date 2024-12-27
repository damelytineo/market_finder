# frozen_string_literal: true

class UserMarketsController < ApplicationController
  def create
    attributes = user_market_params.clone
    # allows us to change an obj keeping a copy of the original
    attributes[:user_id] = current_user.id
    user_market = UserMarket.new(attributes)
    authorize user_market

    if user_market.save
      render json: user_market, status: :created
    else
      render json: { errors: user_market.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_market_params
    params.permit(:user_id, :market_id)
  end
end
