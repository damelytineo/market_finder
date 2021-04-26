class MarketsController < ApplicationController
    before_action :set_market, only: [:show]

    def index 
        render({json: Market.all})
    end

    def show
        render json: @market
    end

    private
    def set_market
        @market = Market.find(params[:id])
    end

end
