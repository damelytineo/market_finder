class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token, raise: false #since we are using cookie and requests are coming from external source include this 
    helper_method :logged_in?, :current_user
  
    def logged_in?
      !!current_user
    end
  
    def current_user 
      @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
    end    
    
end
