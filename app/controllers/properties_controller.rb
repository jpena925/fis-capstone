class PropertiesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_res
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_res

    def index
        property = Property.all
        render json: property, status: :ok
    end

    def show
        property = Property.find(params[:id])
        render json: property, status: :ok
    end

    def create 
        property = Property.create(property_params)
        Image.create(image_url: params[:image_url], property_id: property.id)
        if property.valid? 
            render json: property, status: :created 
        else 
            render json: { errors: property.errors.full_messages }, status: :unprocessable_entity
        end

    end

    def update
        property = Property.find(params[:id])
        property.update!(property_params)
        render json: property, status: :accepted
    end

    def destroy
        property = Property.find(params[:id])
        property.destroy
        head :no_content
    end

    def recent
        properties = Property.all.order(created_at: :desc).limit(3)
        render json: properties, status: :ok
    end

    def filtered
        # byebug
        #params[:search], params[:br], params[:ba], params[:price], params[:pets]
        properties = Property.where("zip == ?", params[:search].to_i)
        if params[:br].to_i > -1
            properties = properties.filter{|property| property[:br] == params[:br].to_i}
        end
        if params[:ba].to_i > -1
            properties = properties.filter{|property| property[:ba] == params[:ba].to_i}
        end
        if params[:price].to_i > -1
            properties = properties.filter{|property| property[:price] < params[:price].to_i}
        end
        
        if ActiveModel::Type::Boolean.new.cast(params[:pets]) == true
            properties = properties.filter{|property| property[:pets] == true}
        end
        render json: properties, status: :ok
    end

    private

    def property_params
        params.permit(:address, :zip, :br, :ba, :pets, :sqft, :price, :date_available, :features, :user_id)
    end

    def render_invalid_res(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_res
        render json: { error: "Property not found" }, status: :not_found
    end
end
