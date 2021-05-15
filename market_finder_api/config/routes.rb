Rails.application.routes.draw do
  resources :markets
  resources :users
  resources :sessions
  resources :user_markets

  resources :users do
    resources :markets
  end

  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  get 'logged_in', to: 'sessions#logged_in'

  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
