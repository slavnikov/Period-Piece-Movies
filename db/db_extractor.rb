extraction = File.open('extracted_db.txt', 'w')
extraction.write("[")
movies = Movie.all

movies.each_with_index do |movie, idx|
  hash = movie.as_json
  hash.delete("created_at")
  hash.delete("updated_at")
  hash.delete("start_date")
  hash.delete("end_date")
  extraction.write(hash.to_s)
  extraction.write(",") if idx < (movies.length - 1)
end

extraction.write("]")
extraction.close
