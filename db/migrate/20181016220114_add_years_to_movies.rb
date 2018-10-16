class AddYearsToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :start_year, :integer
    add_column :movies, :end_year, :integer
  end
end
