class FavoritesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_res
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_res

    def index
        favorites = Favorite.all
        render json: favorites, status: :ok
    end

    def create
        favorite = Favorite.create(fav_params)
        if favorite.valid? 
            render json: favorite, status: :created 
        else 
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
        head :no_content
    end


    private

    def fav_params
        params.permit(:user_id, :property_id)
    end

    def render_invalid_res(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_res
        render json: { error: "User not found" }, status: :not_found
    end


end
