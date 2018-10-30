import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, LOGOUT, SET_TEMP_MOVIE, RECEIVE_RECENT_MOVIES } from '../actions/session_actions';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUserId: Object.values(action.user)[0].id});
      // return {
      //   currentUserId: Object.values(action.user)[0].id,
      //   tempMovie: state.tempMovie,
      // };
    case LOGOUT:
      return merge({}, state, {currentUserId: null});
      // return {
      //   currentUserId: null,
      //   tempMovie: state.tempMovie,
      // };
    case SET_TEMP_MOVIE:
      return merge({}, state, {tempMovie: merge({id: 'new'}, action.movie)});
      // return {
      //   currentUserId: state.currentUserId,
      //   tempMovie: merge({id: 'new'}, action.movie),
      // };
    case RECEIVE_RECENT_MOVIES:
      return merge({}, state, {recentMovies: Object.keys(action.payload.ourMovies)});
    default:
      return state;
  }
};

export default SessionReducer;
