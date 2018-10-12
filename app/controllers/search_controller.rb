class SearchController < ApplicationController
  def by_name
    @movies = Movie.where("lower (title) like ?", "%#{params['query']}%")

    @tmdb_movies = RestClient::Request.execute(
      method: :get,
      url: "https://api.themoviedb.org/3/search/movie?api_key=#{ENV['TMDB_API_KEY']}&language=en-US&query=#{params['query']}&page=1&include_adult=false"
    )

    @tmdb_movies = JSON.parse(@tmdb_movies.body)['results'].select {|result| result['original_language'] == 'en'}
    
    render '/api/movies/index.json.jbuilder'
  end

  def by_date_range
    query_start = params['startDate']
    query_end = params['endDate']

    @movies = Movie
      .where('start_date < ? AND start_date > ?', query_end, query_start)
      .or(Movie.where('end_date < ? AND end_date > ?', query_end, query_start))
      .or(Movie.where('start_date <= ? AND end_date >= ?', query_start, query_end))

    render '/api/movies/index.json.jbuilder'
  end
end
