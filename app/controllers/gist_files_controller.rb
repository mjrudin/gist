class GistFilesController < ApplicationController
  respond_to :json

  def create
    @gist_file = GistFile.new(params[:gist_file])
    @gist_file.gist_id = params[:gist_id]
    @gist_file.save
    render json: @gist_file
  end
end
