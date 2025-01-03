# frozen_string_literal: true

class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:username])

    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { status: 201, user: user, logged_in: true }
    else
      render json: { status: 401, message: 'User not found or password incorrect' }, status: :unauthorized
    end
  end

  def logged_in
    if logged_in?
      render json: { status: 200, user: current_user, logged_in: true }
    else
      render json: { status: 200, user: {}, logged_in: false }
    end
  end

  def destroy
    reset_session

    render json: { status: 200, user: {}, logged_in: false }
  end
end
