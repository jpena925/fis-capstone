class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :phone, :zip, :property, :favorites

  has_many :favorites
end
