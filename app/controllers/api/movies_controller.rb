class Api::MoviesController < ApplicationController
  def create
    @movie = Movie.new(movie_params)

    if @movie.save
      render :show
    else
      render json: @movie.errors.full_messages, status: 422
    end
  end

  def update
    @movie = Movie.find_by(id: params[:id])

    if @movie.update(movie_params)
      render :show
    else
      render json: @movie.errors.full_messages, status: 422
    end
  end

  def show
    @movie = Movie.find_by(id: params[:id])

    render :show
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :year, :start_date, :end_date, :overview, :poster_path)
  end
end
