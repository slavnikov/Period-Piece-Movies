Rails.application.routes.draw do
  root to: 'static_pages#root'

  get 'search/by_name', to: 'search#by_name'
  get 'search/by_date_range', to: 'search#by_date_range'

  namespace :api, defaults: { fromat: 'json' } do
    resources :movies, only: [:create, :update, :show]
  end
end
