class Movie < ApplicationRecord
  validates :title, :start_date, :end_date, presence: true
  validates :title, uniqueness: { scope: :year }
end
