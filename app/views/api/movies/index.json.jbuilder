json.set! 'ourMovies', {}

@movies.each do |movie|
  json.set! 'ourMovies' do
    json.set! movie.id do
      json.partial! '/api/movies/movie.json.jbuilder', movie: movie
    end
  end
end

json.set! 'tmdbMovies', {}

# @tmdb_movies.each do |tmdb_movie|
  json.set! 'tmdbMovies' do
    json.array! @tmdb_movies do |tmdb_movie|
    # json.set! tmdb_movie['id'] do
    # json.array! do
      json.partial! '/api/movies/tmdb_movie.json.jbuilder', tmdb_movie: tmdb_movie
    end
  end
# end
