class SearchController < ApplicationController
  def by_name
    @movies = Movie.where("lower (title) like ?", "%#{params['query']}%")

    render '/api/movies/index.json.jbuilder'
  end

  def by_date_range
    query_start = params['startDate']
    query_end = params['endDate']

    @movies = Movie
      .where('start_date < ? AND start_date > ?', 'query_end', 'query_start')
      .or('end_date < ? AND end_date > ?', 'query_end', 'query_start')
      .or('start_date <= ? AND end_date >= ?', 'query_start', 'query_end')

    render '/api/moves/index.json.jbuilder'
  end
end
