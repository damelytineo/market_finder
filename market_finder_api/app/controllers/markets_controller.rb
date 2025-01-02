# frozen_string_literal: true

class MarketsController < ApplicationController
  before_action :set_market, only: [:show]

  def cached_markets
    Rails.cache.fetch(:cached_markets) do
      Market.all
    end
  end

  def index
    if params[:user_id]
      user = User.find_by(id: params[:user_id])
      if user
        render json: user.markets
      else
        render json: { status: 404, message: 'User not found. Please check the user ID.' }, status: :not_found
      end
    else
      render json: cached_markets
    end
  end

  def show
    if @market
      render json: @market
    else
      render json: { status: 404, message: 'Market not found' }, status: :not_found
    end
  end

  private

  def set_market
    @market = Market.find_by(id: params[:id])
    unless @market
      render json: {
        status: 404,
        message: 'Market not found. Please check the market ID or search the list of markets.'
      }, status: :not_found
    end
  end
end
