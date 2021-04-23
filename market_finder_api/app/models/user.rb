class User < ApplicationRecord
    has_secure_password 

    has_many :user_markets 
    has_many :markets, through: :user_markets

    validates_presence_of :username, :email
    validates_uniqueness_of :username, :email
    validates :password, length: { in: 6..10 }
end
