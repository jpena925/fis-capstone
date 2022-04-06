class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_res
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_res

    def create 
        user = User.create(user_params)
        if user.valid? 
            render json: user, status: :created 
        else 
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end


    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation, :zip)
    end

    def render_invalid_res(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end


end
