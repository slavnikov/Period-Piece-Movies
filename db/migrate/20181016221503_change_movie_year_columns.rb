class ChangeMovieYearColumns < ActiveRecord::Migration[5.2]
  def change
    change_column :movies, :start_year, :integer, null: false
    change_column :movies, :start_year, :integer, null: false
  end
end
