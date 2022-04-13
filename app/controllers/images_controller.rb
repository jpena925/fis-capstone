class ImagesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_res

    def create 
        image = Image.create(image_params)
        if image.valid? 
            render json: image, status: :created 
        else 
            render json: { errors: image.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def image_params
        params.permit(:user_id, :image_url, :property_id)
    end

    def render_invalid_res(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
