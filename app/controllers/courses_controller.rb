class CoursesController < ApplicationController
    before_action :get_course, only: [:show, :update, :destroy]

    def index
        @courses = current_user.courses.all()
        render(json: @courses)
    end

    def show
        render(json: @course)
    end

    def create
        @course = Course.new(
            course: params[:course],
            user_id: current_user.id
        )

        if(@course.save())
            render(json: @course)
        else
            render(json: {error: "Data Not Saved"})
        end

    end

    def update
        
    end

    def destroy
        
    end

    private
        def get_course
            return @course = current_user.courses.find(params[:id])
        end
end
