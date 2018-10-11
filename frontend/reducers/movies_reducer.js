import { merge } from 'lodash';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import { RECEIVE_MOVIE } from '../actions/movie_actions';

const MoviesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, state, action.payload.ourMovies);
    case RECEIVE_MOVIE:
      return merge({}, state, action.movie);
    default:
      return state;
  }
};

export default MoviesReducer;
