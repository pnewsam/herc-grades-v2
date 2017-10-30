class Api::SectionsController < ApplicationController
  # before_action :authenticate_teacher!
  def index
    # @sections = current_teacher.sections
    @sections = Section.all
    render json: @sections.to_json
  end
  def show
    puts params
    s = Section.find(params[:id])
    render json: s.to_json
  end
  def create
    puts current_teacher
    s = Section.new(name: params[:name], teacher_id: current_teacher.id)
    if s.save
      render json: {
        data: {
          message: "Section successfully created!",
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
