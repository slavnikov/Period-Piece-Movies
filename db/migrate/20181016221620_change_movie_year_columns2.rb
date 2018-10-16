class ChangeMovieYearColumns2 < ActiveRecord::Migration[5.2]
  def change
    change_column :movies, :end_year, :integer, null: false
  end
end
