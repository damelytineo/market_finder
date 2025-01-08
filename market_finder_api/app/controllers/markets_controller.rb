# frozen_string_literal: true

class MarketsController < ApplicationController
  before_action :set_market, only: [:show]

  def cached_markets
    Rails.cache.fetch(:cached_markets, expires_in: 1.week) do
      Market.all
    end
  rescue => e
    Rails.logger.error("Error fetching cached markets: #{e.message}")
    nil
  end

  def index
    if params[:user_id]
      user = User.find_by(id: params[:user_id])
      if user
        begin
          authorize user, :index?
          paginate(user.markets)
        rescue Pundit::NotAuthorizedError
          render json: { status: 401, message: 'Unauthorized' }, status: :unauthorized
        end
      else
        render json: { status: 404, message: 'User not found' }, status: :not_found
      end
    else
      markets = cached_markets
      if markets
        paginate(markets)
      else
        render json: { status: 500, message: 'Unable to retrieve markets' }, status: :internal_server_error
      end
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

  def paginate(collection)
    paginated_collection = Kaminari.paginate_array(collection).page(params[:page]).per(params[:per_page] || 10)
    render json: {
      status: 200,
      markets: paginated_collection
    }
  end
end
