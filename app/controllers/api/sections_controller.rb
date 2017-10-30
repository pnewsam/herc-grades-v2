class Api::SectionsController < ApplicationController
  before_action :authenticate_teacher!
  def index
    @sections = Section.all
    render json: @sections.to_json(include: :course)
  end
  def create
    s = Section.new(name: params[:name])
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
