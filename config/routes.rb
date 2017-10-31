Rails.application.routes.draw do
  mount_devise_token_auth_for 'Teacher', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :sections
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end  
end
