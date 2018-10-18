class ChangeLatLngToFloats < ActiveRecord::Migration[5.2]
  def change
    change_column :movies, :lat, :float
    change_column :movies, :lng, :float
  end
end
