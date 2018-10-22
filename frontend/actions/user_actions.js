import * as UserAPI from '../api/user_requests';

export const RECEIVE_USER = 'RECEIVE_USER';

export const createUser = (params) => {
  return (dispatch) => {
    UserAPI.createUser(params).then((user) => {
      dispatch(receiveUser(user));
    });
  };
};

export const receiveUser = (user) => {
  return ({
    type: RECEIVE_USER,
    user: user,
  });
};
