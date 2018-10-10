class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
    add_index :movies, :title
    add_index :movies, :start_date
    add_index :movies, :end_date
  end
end
