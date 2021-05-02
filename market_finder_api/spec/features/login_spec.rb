require 'rails-helper'

RSpec.feature "Login", type: feature, js: true do 

    scenario "User logs into their account" do 
        visit ("/login")
        fill_in "username",	with: "sometext" 
        fill_in "passwors",	with: "password" 
        click_button "Submit"
        expect (page).to 
    end
    
end