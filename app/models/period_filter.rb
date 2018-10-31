class PeriodFilter < ApplicationRecord
  validates :name, presence: true

  has_many :time_periods
end
