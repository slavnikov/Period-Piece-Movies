class Movie < ApplicationRecord
  validates :title, :start_date, :end_date, presence: true
  valides :title, uniqueness: { scope: :year }
end
