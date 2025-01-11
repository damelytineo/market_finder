class AddEbtAcceptedToMarkets < ActiveRecord::Migration[5.2]
  def change
    add_column :markets, :ebt_accepted, :string
  end
end
