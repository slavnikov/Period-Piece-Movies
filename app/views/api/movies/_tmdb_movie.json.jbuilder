json.set! "title", tmdb_movie['title']
# json.set! 'year', tmdb_movie['release_date'].slice(0,4).to_i
json.set! 'year', tmdb_movie['year']
json.set! 'overview', tmdb_movie['overview']
json.set! 'poster_path', tmdb_movie['poster_path']
