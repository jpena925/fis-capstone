class Property < ApplicationRecord
  belongs_to :user
  has_many :favorites
  has_many :images
end
