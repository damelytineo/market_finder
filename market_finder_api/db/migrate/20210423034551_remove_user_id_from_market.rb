# frozen_string_literal: true

class RemoveUserIdFromMarket < ActiveRecord::Migration[5.2]
  def change
    remove_column :markets, :user_id, :string
  end
end
