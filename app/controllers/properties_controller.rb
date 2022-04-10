class PropertiesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_res

    def index
        property = Property.all
        render json: property, status: :ok
    end

    def show
        property = Property.find(params[:id])
        render json: property, status: :ok
    end

    def recent
        properties = Property.all.order(created_at: :desc).limit(3)
        render json: properties, status: :ok
    end

    private

    def render_not_found_res
        render json: { error: "Property not found" }, status: :not_found
    end
end
