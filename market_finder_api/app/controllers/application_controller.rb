# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include Pundit
  # since we are using cookie and requests are coming from external source include this
  skip_before_action :verify_authenticity_token, raise: false
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  def logged_in?
    current_user.present?
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  private

  def user_not_authorized
    render json: { error: 'You are not authorized to perform this action.' }, status: :forbidden
  end
end
