import { merge } from 'lodash';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const SearchResultsReudcer = (state = { ourMovieIDs: [], tmdbMovies: {} }, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      const ourMovieIDs = Object.values(action.payload.ourMovies).map(movie => movie.id);
      return {
        ourMovieIDs: ourMovieIDs || [],
        tmdbMovies: action.payload.tmdbMovies || {},
      };
    default:
      return state;
  }
};

export default SearchResultsReudcer;
