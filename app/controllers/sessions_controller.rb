class SessionsController < ApplicationController

    def show
        user = User.find(session[:user_id])
        render json: user, status: :ok, include: ['favorites.property', 'property.images']
    end

    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: :created, include: ['favorites.property', 'property.images'] 
        elsif user
            render json: { error: "Invalid password" }, status: :unauthorized
        else 
            render json: { error: "Invalid username" }, status: :unauthorized
        end
    end

    def destroy 
        session.delete :user_id 
        head :no_content
    end

end
