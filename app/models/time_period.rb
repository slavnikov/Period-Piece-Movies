class TimePeriod < ApplicationRecord
  validates :name, :start_year, :end_year, presence: true
  validates :name, uniqueness: true

  belongs_to :period_filter
end
