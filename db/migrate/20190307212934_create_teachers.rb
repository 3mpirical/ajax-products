class CreateTeachers < ActiveRecord::Migration[5.2]
  def change
    create_table :teachers do |t|
      t.string :teacher
      t.belongs_to :course, foreign_key: true

      t.timestamps
    end
  end
end
