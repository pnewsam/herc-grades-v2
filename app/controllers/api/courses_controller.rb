class Api::CoursesController < ApplicationController
  before_action :authenticate_teacher!
  def create
    @courses = Course.all
    render json: @courses.to_json
  end
end
