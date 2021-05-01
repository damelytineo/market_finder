require 'rails_helper'

RSpec.describe User, type: :model do

  it "is valid with valid attributes" do
    expect(User.new).to be_valid
  end

  it "is not valid without a username" do
    user = User.new(username: nil)
    expect(user).to_not be_valid
  end

  it "is not valid without a email" do
    user = User.new(email: nil)
    expect(user).to_not be_valid
  end

  it "is not valid without a password" do
    user = User.new(password: nil)
    expect(user).to_not be_valid
  end

  it "is not a valid password" do
    user = User.new(password: "12345")
    user = User.new(password: "12345678999")
    expect(user).to_not be_valid
  end

end
