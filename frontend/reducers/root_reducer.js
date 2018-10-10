import { combineReducers } from 'redux';
import MoviesReducer from './movies_reducer';

const RootReducer = combineReducers({
  movies: MoviesReducer,
});

export default RootReducer;
