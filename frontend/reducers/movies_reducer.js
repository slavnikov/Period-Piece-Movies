import { merge } from 'lodash';
import { RECEIVE_MOVIES } from '../actions/search_actions';

const MoviesReducer = (state = {ourMovies: {}, tmdbMovies: {}}, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return merge({}, state, action.payload);
    default:
      return state;
  }
};

export default MoviesReducer;
