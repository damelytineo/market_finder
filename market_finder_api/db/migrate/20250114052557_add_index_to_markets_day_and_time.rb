class AddIndexToMarketsDayAndTime < ActiveRecord::Migration[5.2]
  def change
    add_index :markets, [:open_time, :close_time, :season_begin, :season_end, :days_of_operation], name: 'index_markets_on_time_and_season'
  end
end
