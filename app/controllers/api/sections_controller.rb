class Api::SectionsController < ApplicationController
  def index
    @sections = Section.all
    render_json @sections.to_json
  end
end
