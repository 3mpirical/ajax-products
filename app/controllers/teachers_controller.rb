class TeachersController < ApplicationController
    def index
        @teachers = current_user.teachers.all()
        p @teachers
        render(json: @teachers)
      end
      
      def show
        @teacher = current_user.teachers.find(params[:id])
        render(json: @teacher)
      end
end
