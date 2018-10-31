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

  def recent
    @movies = Movie.order("created_at desc").limit(10)

    render :index
  end

  def backup_db
    extraction = File.open('db/extracted_db.rb', 'w')
    extraction.write("EXTRACTED_DB = [\n")
    movies = Movie.all

    movies.each_with_index do |movie, idx|
      hash = movie.as_json
      hash.delete("created_at")
      hash.delete("updated_at")
      hash.delete("start_date")
      hash.delete("end_date")
      extraction.write(hash.to_s)
      extraction.write(",\n") if idx < (movies.length - 1)
    end

    extraction.write("\n]")
    extraction.close
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :year, :start_year, :end_year, :overview, :lat, :lng, :poster_path)
  end
end
