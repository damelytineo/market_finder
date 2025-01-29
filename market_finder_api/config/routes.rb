# frozen_string_literal: true

Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"
  match '/graphql', to: 'graphql#execute', via: [:post, :get]

  resources :markets, only: %i[index show]
  resources :sessions
  resources :user_markets

  resources :users do
    resources :markets, only: %i[index create], controller: 'user_markets'
  end

  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  get 'logged_in', to: 'sessions#logged_in'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
