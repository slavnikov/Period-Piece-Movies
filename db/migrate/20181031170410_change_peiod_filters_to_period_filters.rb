class ChangePeiodFiltersToPeriodFilters < ActiveRecord::Migration[5.2]
  def change
    rename_table :peiod_filters, :period_filters
  end
end
