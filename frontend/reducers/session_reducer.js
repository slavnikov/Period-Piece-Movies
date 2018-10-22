import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUserId: Object.values(action.user)[0].id};
    case LOGOUT:
      return {currentUserId: null};
    default:
      return state;
  }
};

export default SessionReducer;
