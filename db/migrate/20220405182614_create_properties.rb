class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :address
      t.integer :zip
      t.integer :br
      t.integer :ba
      t.boolean :pets
      t.integer :sqft
      t.integer :price
      t.date :date_available
      t.text :features
      t.boolean :landlord
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
