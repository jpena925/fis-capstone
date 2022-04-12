Rails.application.routes.draw do
  
  resources :images
  resources :favorites
  resources :properties
  resources :users

  post '/login', to: 'sessions#create'
  get '/me', to: 'sessions#show'
  delete '/logout', to: 'sessions#destroy'
  get '/recent', to: 'properties#recent'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
