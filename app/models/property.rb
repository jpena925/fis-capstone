class Property < ApplicationRecord
  belongs_to :user
  has_many :favorites
  has_many :images

  validates :price, numericality: true
  validates :price, numericality: {greater_than: 0}
end
