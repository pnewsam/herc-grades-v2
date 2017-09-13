class Api::SectionsController < ApplicationController
  before_action :authenticate_user!
  def index
    @sections = Section.all
    render json: @sections.to_json
  end
end
