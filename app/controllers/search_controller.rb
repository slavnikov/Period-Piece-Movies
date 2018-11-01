class SearchController < ApplicationController
  def by_name
    query = params['query'].downcase
    @movies = Movie.where("lower (title) like ?", "%#{query}%")
    @tmdb_movies = RestClient::Request.execute(
      method: :get,
      url: "https://api.themoviedb.org/3/search/movie?api_key=#{ENV['TMDB_API_KEY']}&language=en-US&query=#{params['query']}&page=1&include_adult=false"
    )
    @tmdb_shows = RestClient::Request.execute(
      method: :get,
      url: "https://api.themoviedb.org/3/search/tv?api_key=#{ENV['TMDB_API_KEY']}&language=en-US&query=#{params['query']}&page=1"
    )
    @tmdb_movies = JSON.parse(@tmdb_movies.body)['results'].select {|result| result['original_language'] == 'en'}
    @tmdb_shows = JSON.parse(@tmdb_shows.body)['results'].select {|result| result['original_language'] == 'en'}
    @tmdb_shows.map! do |show|
      show['year'] = show['first_air_date'].slice(0,4).to_i
      show['title'] = show['name']
      show
    end
    @tmdb_movies.map!  do |tmdb_movie|
      tmdb_movie['year'] = tmdb_movie['release_date'].slice(0,4).to_i
      tmdb_movie
    end
    @tmdb_movies.concat(@tmdb_shows)
    @tmdb_movies.select! do |tmdb_movie|
      @movies.none? {|movie| movie['title'] == tmdb_movie['title'] && movie['year'] == tmdb_movie['year']}
    end

    render '/api/movies/index.json.jbuilder'
  end

  def by_date_range
    query_start = params['startYear']
    query_end = params['endYear']

    @movies = Movie
      .where(start_year: query_start..query_end)
      .or(Movie.where(end_year: query_start..query_end))
      .or(Movie.where('start_year <= ? AND end_year >= ?', query_start, query_end))

    render '/api/movies/index.json.jbuilder'
  end
end
