class Api::CoursesController < ApplicationController
  before_action :authenticate_teacher!
  def index
    @courses = Course.all
    render json: @courses.to_json
  end
  def create
    c = Course.new(name: params[:name])
    if c.save
      render json: {
        data: {
          message: "Course successfully created!",
        }
      }, status: 200
    else
      render json: {
        data: {
          message: 'Something went wrong.'
        }, status: 500
      }
    end
  end
end
