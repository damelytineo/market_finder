# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :set_user, only: [:show]

  # POST /users
  def create
    user = User.find_by(email: user_params[:email])
    if user
      render json: {
        status: 422,
        message: 'A user with this email already exists. Please log in or use a different email.'
      }, status: :unprocessable_entity
    else
      user = User.new(user_params)
      begin
        if user.save
          render json: { status: 201, user: user }, status: :created
        else
          render json: { status: 422, errors: user.errors.details }, status: :unprocessable_entity
        end
      rescue ActiveRecord::RecordNotUnique
        render json: {
          status: 422,
          message: 'A user with this username already exists. Please use a different username.'
        }, status: :unprocessable_entity
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
