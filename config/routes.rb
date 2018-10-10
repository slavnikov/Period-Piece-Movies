Rails.application.routes.draw do
  root to: 'static_pages#root'

  get 'search/by_name', to: 'search#by_name'
  # get 'search/by_date_span', to: 'search#by_date_span'
end
