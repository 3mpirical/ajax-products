class User < ApplicationRecord

  has_many :courses, dependent: :destroy
  has_many :books, through: :courses
  has_many :teachers, through: :courses

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
