Rails.application.routes.draw do
  root "users#show"

  devise_for :users

  resources :users, only: [:show] do
    resources :courses, only: [:create, :update, :destroy]
    resources :books, only: [:create, :update, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
