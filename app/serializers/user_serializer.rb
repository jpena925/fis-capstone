
class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :phone, :zip, :property

  has_many :favorites
  has_one :property
  has_many :images, through: :property
end
