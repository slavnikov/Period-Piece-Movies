class Movie < ApplicationRecord
  validates :title, :start_year, :end_year, :year, :overview, presence: true
  validates :title, uniqueness: { scope: :year }
end
