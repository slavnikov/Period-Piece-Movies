import * as UserAPI from '../api/user_requests';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const createUser = (params) => {
  return (dispatch) => {
    UserAPI.createUser(params).then((user) => {
      dispatch(receiveCurrentUser(user));
    });
  };
};

export const receiveUser = (user) => {
  return ({
    type: RECEIVE_USER,
    user: user,
  });
};
