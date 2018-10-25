import { RECEIVE_CURRENT_USER, LOGOUT, SET_TEMP_MOVIE } from '../actions/session_actions';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUserId: Object.values(action.user)[0].id,
        tempMovie: state.tempMovie,
      };
    case LOGOUT:
      return {
        currentUserId: null,
        tempMovie: state.tempMovie,
      };
    case SET_TEMP_MOVIE:
      return {
        currentUserId: state.currentUserId,
        tempMovie: {
          id: 'new',
          title: action.movie.title,
          year: action.movie.year,
          overview: action.movie.overview,
        }
      };
    default:
      return state;
  }
};

export default SessionReducer;
