class FavoritesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_res
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_res

    def index
        favorites = Favorite.all
        render json: favorites, status: :ok
    end


    private

    def render_invalid_res(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_res
        render json: { error: "User not found" }, status: :not_found
    end


end
