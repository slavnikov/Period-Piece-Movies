@movies.each do |movie|
  json.set! 'ourMovies' do
    json.set! movie.id do
      json.partial! '/api/movies/movie.json.jbuilder', movie: movie
    end
  end
end
