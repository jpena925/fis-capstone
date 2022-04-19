class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_res
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_res

    def index
        user = User.all
        render json: user, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok, include: ['favorites.property', 'property.images']
    end


    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :accepted, include: ['favorites.property', 'property.images']
    end

    def create 
        user = User.create(user_params)
        if user.valid? 
            render json: user, status: :created, include: ['favorites.property']
        else 
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end


    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation, :zip, :phone)
    end

    def render_invalid_res(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_res
        render json: { error: "User not found" }, status: :not_found
    end


end
