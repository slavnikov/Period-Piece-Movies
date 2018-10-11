import { merge } from 'lodash';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const MoviesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, state, action.payload.ourMovies);
    default:
      return state;
  }
};

export default MoviesReducer;
