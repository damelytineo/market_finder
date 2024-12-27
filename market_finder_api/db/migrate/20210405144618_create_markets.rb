# frozen_string_literal: true

class CreateMarkets < ActiveRecord::Migration[5.2]
  def change
    create_table :markets do |t|
      t.string :name
      t.string :borough
      t.string :street_address
      t.integer :district
      t.float :latitude
      t.float :longitude
      t.string :days_of_operation
      t.string :hours
      t.string :season_dates

      t.belongs_to :user
      t.timestamps
    end
  end
end
