class MakeLatLngRequired < ActiveRecord::Migration[5.2]
  def change
    change_column :movies, :lat, :float, null: false
    change_column :movies, :lng, :float, null: false
  end
end
