SessionsTemplate::Application.routes.draw do
  resources :users, :only => [:new, :create, :show]
  resource :session, :only => [:new, :create, :destroy]
  resources :gists do
    resource :favorite, :only => [:create, :destroy]
    resources :gist_files, :only => [:index, :create]
  end
  resources :favorites, :only => [:index]
  root :to => "users#new"
end
