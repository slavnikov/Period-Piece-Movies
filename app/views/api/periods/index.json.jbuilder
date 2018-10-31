json.set! 'period_filters' do
  @period_filters.each do |period_filter|
    json.set! period_filter.id do
      json.partial! '/api/periods/period_filter.json.jbuilder', period_filter: period_filter
    end
  end
end

json.set! 'time_periods' do
  @time_periods.each do |time_period|
    json.set! time_period.id do
      json.partial! '/api/periods/time_period.json.jbuilder', time_period: time_period
    end
  end
end
