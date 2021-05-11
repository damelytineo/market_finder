require "rails_helper"

RSpec.describe "User login", :type => :request do

    headers = { "ACCEPT" => "application/json" }

    it "is an invalid login" do
        post "/login", :params => { :username => "damely123", :password => "pass123" }, :headers => headers
        expect(response.content_type).to eq("application/json")
        expect(response).to have_http_status(:unauthorized)
    end

    it "is a successful user login" do
        User.create(username: "Sheidheda", email: "test@email.com", password:"the100")
        post "/login", :params => { :username => "Sheidheda", :password => "the100" }, :headers => headers
        expect(response.content_type).to eq("application/json")
        expect(response).to have_http_status(:ok)
    end

    it "user is not logged in" do
        get "/logged_in", :headers => headers
        expect(response.content_type).to eq("application/json")
        expect(JSON(response.body)["logged_in"]).to be false
    end

    it "user is logged in" do
        User.create(username: "Sheidheda", email: "test@email.com", password:"the100")
        post "/login", :params => { :username => "Sheidheda", :password => "the100" }

        get "/logged_in", :headers => headers
        expect(response.content_type).to eq("application/json")
        expect(JSON(response.body)["logged_in"]).to be true
    end

    it "user is logged out" do
        User.create(username: "Sheidheda", email: "test@email.com", password:"the100")
        post "/login", :params => { :username => "Sheidheda", :password => "the100" }
        delete "/logout"
        expect(session[:user_id]).to be_nil
    end


end