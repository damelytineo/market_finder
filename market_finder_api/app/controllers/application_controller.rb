class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token, raise: false #since we are using cookie and requests are coming from external source include this 
    helper_method :logged_in?, :current_user
  
    def logged_in?
      # if current user method true, logged_in true
      !!current_user
    end
  
    def current_user  
      # define user
      if session[:user_id]
        @current_user = User.find(session[:user_id])
      end
    end
    
end
