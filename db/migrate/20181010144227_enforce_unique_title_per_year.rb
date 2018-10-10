class EnforceUniqueTitlePerYear < ActiveRecord::Migration[5.2]
  def change
    add_index :movies, [:title, :year], unique: true
  end
end
