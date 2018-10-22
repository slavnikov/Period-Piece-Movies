import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUserId: Object.values(action.user)[0].id};
    default:
      return state;
  }
};

export default SessionReducer;
