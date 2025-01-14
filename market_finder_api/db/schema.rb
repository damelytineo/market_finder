# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2025_01_14_052557) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "markets", force: :cascade do |t|
    t.string "name"
    t.string "borough"
    t.string "street_address"
    t.integer "district"
    t.float "latitude"
    t.float "longitude"
    t.string "days_of_operation"
    t.string "hours"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "ebt_accepted"
    t.date "season_begin"
    t.date "season_end"
    t.time "open_time"
    t.time "close_time"
    t.index ["open_time", "close_time", "season_begin", "season_end", "days_of_operation"], name: "index_markets_on_time_and_season"
  end

  create_table "user_markets", force: :cascade do |t|
    t.integer "user_id"
    t.integer "market_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "market_id"], name: "index_user_markets_on_user_id_and_market_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
