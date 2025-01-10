# frozen_string_literal: true

require 'sidekiq/scheduler'

Sidekiq.configure_server do |config|
  config.on(:startup) do
    schedule_file = Rails.root.join('config', 'sidekiq_schedule.yml')

    Sidekiq.schedule = YAML.load_file(schedule_file)

    Sidekiq::Scheduler.reload_schedule!
  end
end
