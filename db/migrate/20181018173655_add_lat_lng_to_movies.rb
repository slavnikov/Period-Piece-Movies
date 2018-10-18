class AddLatLngToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :lat, :integer
    add_column :movies, :lng, :integer
  end
end
