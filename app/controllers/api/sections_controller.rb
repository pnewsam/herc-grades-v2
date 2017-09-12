class Api::SectionsController < ApplicationController
  def index
    @sections = Section.all
    render json: @sections.to_json
  end
end
