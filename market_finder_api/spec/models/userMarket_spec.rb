require 'rails_helper'

RSpec.describe UserMarket, type: :model do
  
  describe "Associations" do 
    it { should belong_to(:user) }
    it { should belong_to(:market)}
  end

  describe "Validations" do
    it { should validate_presence_of(:user_id) }
    it { should validate_presence_of(:market_id) }
  end

end