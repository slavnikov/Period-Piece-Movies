class Api::PeriodsController < ApplicationController
  def index
    @period_filters = PeriodFilter.all.includes(:time_periods)
    @time_periods = @period_filters.reduce([]) {|acc, period_filter| acc.concat(period_filter.time_periods)}

    render :index
  end
end
