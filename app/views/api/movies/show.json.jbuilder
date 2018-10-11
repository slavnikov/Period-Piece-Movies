json.set! @movie.id do
  json.partial! '/api/movies/movie.json.jbuilder', movie: @movie
end
