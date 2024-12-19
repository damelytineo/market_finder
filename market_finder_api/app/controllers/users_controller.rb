class UsersController < ApplicationController
    before_action :set_user, only: [:show]
    
    # POST /users
    def create
        user = User.new(user_params)
        if user.save
            render json: { status: 201, user: user }, status: :created
        else
            render json: { status: 422, errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
