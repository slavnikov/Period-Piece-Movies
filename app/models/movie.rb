class Movie < ApplicationRecord
  validates :title, :start_date, :end_date, :year, :overview, presence: true
  validates :title, uniqueness: { scope: :year }
end
