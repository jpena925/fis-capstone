class User < ApplicationRecord
    has_many :properties
    has_many :favorites
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :zip, presence: true, length: { is: 5 }
end
