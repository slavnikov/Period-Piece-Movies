class CreateTimePeriods < ActiveRecord::Migration[5.2]
  def change
    create_table :time_periods do |t|
      t.string :name, null: false, unique: true
      t.integer :start_year, null: false
      t.integer :end_year, null: false
      t.integer :period_filter_id, null: false

      t.timestamps
    end
  end
end
