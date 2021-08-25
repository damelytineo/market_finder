class UserMarketsController < ApplicationController

    def create
        attributes = user_market_params.clone 
        # allows us to change an obj keeping a copy of the original 

        if current_user
            # via attributes set user_market's user_id to current_user before instantiating 
            attributes[:user_id] = current_user.id 
            user_market = UserMarket.create(attributes)        
            render json: user_market
        else
            # current_user.id == nil
            render json: { status: 401, message: 'Valid cookie required'}, status: :unauthorized
        end
    end

    private
    def user_market_params
        params.permit(:user_id, :market_id)
    end
    
end

