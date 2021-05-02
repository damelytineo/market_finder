require 'rails_helper'

RSpec.describe Market, type: :model do

  subject { 
    described_class.new(
      name: "Anything",
      borough: "Anything", 
      street_address: "Anything", 
      district: "Anything", 
      latitude: "Anything", 
      longitude: "Anything", 
      days_of_operation: "Anything", 
      hours: "Anything",
      season_dates: "Anything"
    )
  }

    describe "Validations" do 
        it "is valid with valid attributes" do
            expect(subject).to be_valid
        end
    end 

end