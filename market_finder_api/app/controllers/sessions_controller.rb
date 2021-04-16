class SessionsController < ApplicationController
    def create
        puts params
        user = User.find_by(username: params[:username])

        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: { status: 201, user: user, logged_in: true}

        else
            render json: { status: 401, message: 'User not found or password incorrect'}
        end
    end

    def logout
        reset_session
        render json: { status: 200, user: {}, logged_in: false }
    end

end
