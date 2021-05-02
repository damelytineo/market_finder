require 'rails_helper'

RSpec.describe UserMarket, type: :model do

  subject { 
    described_class.new(
      user_id: user_id,
      market_id: market_id,
    )
  }

    describe "Validations" do 
        it "is valid with valid attributes" do
            expect(subject).to be_valid
        end

        # it { should validate_presence_of(:user) }
        # it { should validate_presence_of(:market) }

        it { should belong_to(:user)}
        it { should belong_to(:market)}

    end
end