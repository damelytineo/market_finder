# frozen_string_literal: true

class UserMarketsController < ApplicationController
  def create
    return render json: { error: 'Not authenticated' }, status: :unauthorized unless logged_in?

    attributes = user_market_params.clone
    attributes[:user_id] = current_user.id
    user_market = UserMarket.new(attributes)

    begin
      authorize current_user, :create?

      if user_market.save
        render json: user_market, status: :created
      else
        render json: { errors: user_market.errors.full_messages }, status: :unprocessable_entity
      end
    rescue Pundit::NotAuthorizedError
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end

  private

  def user_market_params
    params.permit(:market_id)
  end
end
