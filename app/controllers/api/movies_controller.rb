class Api::MoviesController < ApplicationController
  def index
    @movies = Movies.all

    render :index
  end
end
