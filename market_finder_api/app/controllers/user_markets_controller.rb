# frozen_string_literal: true

class UserMarketsController < ApplicationController
  def index
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
  end

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

  def paginate(collection)
    paginated_collection = Kaminari.paginate_array(collection).page(params[:page]).per(params[:per_page] || 10)
    render json: {
      status: 200,
      markets: paginated_collection,
      meta: {
        total_page_count: paginated_collection.total_pages
      }
    }
  end
end
