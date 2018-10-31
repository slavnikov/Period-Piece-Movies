class CreatePeiodFilters < ActiveRecord::Migration[5.2]
  def change
    create_table :peiod_filters do |t|
      t.string :name, null: false, unique: true

      t.timestamps
    end
  end
end
