class Property < ApplicationRecord
  belongs_to :user
  has_many :favorites, dependent: :destroy
  has_many :images, dependent: :destroy

  validates :address, uniqueness: true
  validates :zip, numericality: true, length: {is: 5}
  validates :sqft, numericality: true
  validates :sqft, numericality: {greater_than: 0}
  validates :price, numericality: true
  validates :price, numericality: {greater_than: 0}
end
