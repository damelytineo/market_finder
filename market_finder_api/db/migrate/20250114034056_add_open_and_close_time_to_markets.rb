class AddOpenAndCloseTimeToMarkets < ActiveRecord::Migration[5.2]
  def change
    add_column :markets, :open_time, :time
    add_column :markets, :close_time, :time
  end
end
