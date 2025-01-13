class AddUniqueConstraintToUserMarkets < ActiveRecord::Migration[5.2]
  def change
    add_index :user_markets, [:user_id, :market_id], unique: true
  end
end
