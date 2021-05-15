class MarketsController < ApplicationController
    before_action :set_market, only: [:show]

    def index 
        puts params 
        if params[:user_id] 
            user = User.find_by(id: params[:user_id])
            if user
                render json: user.markets
            else
                render json: { status: 401, message: 'User not found'}, status: :unauthorized
            end
        else
            render json: Market.all
        end
    end

    def show
        render json: @market
    end

    private
    def set_market
        @market = Market.find(params[:id])
    end

end
