import { combineReducers } from 'redux';
import MoviesReducer from './movies_reducer';
import SearchResultsReudcer from './search_results_reducer';
import UsersReducer from './users_reducer';

const RootReducer = combineReducers({
  users: UsersReducer,
  movies: MoviesReducer,
  searchResults: SearchResultsReudcer,
});

export default RootReducer;
