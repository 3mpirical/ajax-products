class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :book
      t.string :price
      t.belongs_to :course, foreign_key: true

      t.timestamps
    end
  end
end
