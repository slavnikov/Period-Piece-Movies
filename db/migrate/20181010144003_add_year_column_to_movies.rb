class AddYearColumnToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :year, :integer, null: false
  end
end
