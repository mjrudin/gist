class FavoritesController < ApplicationController

  def index
  end

  def create
    @favorite = Favorite.find_or_create_by_user_id_and_gist_id(
                            current_user.id,
                            params[:gist_id])
    render json: @favorite
  end

  def destroy
    @favorite = Favorite.find_by_user_id_and_gist_id(
                            current_user.id,
                            params[:gist_id])
    @favorite.destroy
    render json: Favorite.new
  end
end
