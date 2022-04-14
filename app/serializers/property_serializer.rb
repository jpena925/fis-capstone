class PropertySerializer < ActiveModel::Serializer
  attributes :id, :address, :zip, :br, :ba, :pets, :sqft, :price, :date_available, :features, :landlord, :images
  belongs_to :user
  has_many :images
end
