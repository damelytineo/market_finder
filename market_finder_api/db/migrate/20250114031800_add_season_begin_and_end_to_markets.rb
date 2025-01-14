class AddSeasonBeginAndEndToMarkets < ActiveRecord::Migration[5.2]
  def change
    add_column :markets, :season_begin, :date
    add_column :markets, :season_end, :date
    remove_column :markets, :season_dates, :string
  end
end
