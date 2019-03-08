Rails.application.routes.draw do
  root "users#show"

  devise_for :users

  resources :users, only: [:show] do
    resources :courses, only: [:index, :show, :create, :update, :destroy]
    resources :books, only: [:index, :show, :create, :update, :destroy]
    resources :teachers, only: [:index, :show]
  end
end
