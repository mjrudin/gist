class GistsController < ApplicationController
  respond_to :html, :json

  def index
    @gists = current_user.gists
    respond_with @gists
  end

  def create
    @gist = current_user.gists.new(params[:gist])
    @gist.save
    respond_with @gist
  end
end
