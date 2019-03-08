class UsersController < ApplicationController
  def show
    @course = Course.new()
  end
end
