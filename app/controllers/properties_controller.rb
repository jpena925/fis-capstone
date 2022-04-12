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

    def create 
        property = User.create(property_params)
        if property.valid? 
            render json: property, status: :created 
        else 
            render json: { errors: property.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def recent
        properties = Property.all.order(created_at: :desc).limit(3)
        render json: properties, status: :ok
    end

    private

    def property_params
        params.permit(:address, :zip, :br, :ba, :pets, :sqft, :price, :date_available, :features, :user_id)
    end

    def render_not_found_res
        render json: { error: "Property not found" }, status: :not_found
    end
end
