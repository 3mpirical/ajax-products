class Course < ApplicationRecord
  belongs_to :user
  has_many :teachers, dependent: :destroy
  has_many :books, dependent: :destroy
end
