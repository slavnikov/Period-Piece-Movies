import { combineReducers } from 'redux';
import MoviesReducer from './movies_reducer';
import SearchResultsReudcer from './search_results_reducer';

const RootReducer = combineReducers({
  movies: MoviesReducer,
  searchResults: SearchResultsReudcer,
});

export default RootReducer;
