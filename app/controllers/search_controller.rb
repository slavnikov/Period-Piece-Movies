class SearchController < ApplicationController
  def by_name
    @movies = Movie.where("lower (title) like ?", "%#{params['query']}%")

    render '/api/movies/index.json.jbuilder'
  end
end
