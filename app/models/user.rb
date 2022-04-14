class User < ApplicationRecord
    has_one :property
    has_many :favorites
    has_many :images, through: :property
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :zip, presence: true, length: { is: 5 }
    validates :phone, length: { is: 10 }, allow_blank: true
end
