class Api::SectionsController < ApplicationController
  before_action :authenticate_teacher!
  def index
    @sections = Section.all
    render json: @sections.to_json(include: :course)
  end
end
