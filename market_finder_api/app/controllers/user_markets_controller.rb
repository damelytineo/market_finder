class UserMarketsController < ApplicationController

    def create
        #if not logged in then handle error properly (since current_user.id will be nil)
        # message: valid cookie required
        attributes = user_market_params.clone
        attributes[:user_id] = current_user.id

        user_market = UserMarket.create(attributes)

        render json: user_market
    end

    private
    def user_market_params
        params.permit(:user_id, :market_id)
    end
    
end

