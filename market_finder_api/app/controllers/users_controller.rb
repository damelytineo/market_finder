class UsersController < ApplicationController
    before_action :set_user, only: [:show]

    # GET /users/1
    def show
        render json: @user
    end

    
    # POST /users
    def create
        @user = User.new(user_params)
    end


    private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
