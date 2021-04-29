require 'test_helper'

class UserMarketTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  def setup
    @user_market = UserMarket.new
  end

  # test "market should be valid" do 
  #   assert @user_market.valid?
  # end

  test "market should have a user id" do 
    # alongside model validations 
    @user_market.user_id= ""
    assert_not @user_market.valid?
  end

end
