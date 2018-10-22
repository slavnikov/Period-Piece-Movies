import * as SessionApi from '../api/session_requests';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT = 'LOGOUT';

export const login = (user) => {
  return (dispatch) => {
    SessionApi.login(user).then((user) => {
      dispatch(receiveCurrentUser(user));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    SessionApi.logout().then(() => {
      dispatch(logoutAction());
    });
  };
};

export const logoutAction = () => {
  return ({
    type: LOGOUT,
  });
};

export const receiveCurrentUser = (user) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    user: user
  });
};
