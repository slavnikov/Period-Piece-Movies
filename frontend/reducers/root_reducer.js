import { combineReducers } from 'redux';
import MoviesReducer from './movies_reducer';
import SearchResultsReudcer from './search_results_reducer';
import UsersReducer from './users_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  users: UsersReducer,
  movies: MoviesReducer,
  searchResults: SearchResultsReudcer,
  session: SessionReducer,
});

export default RootReducer;
