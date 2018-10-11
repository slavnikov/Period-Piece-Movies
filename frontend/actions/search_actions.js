import * as SearchAPI from '../api/search_requests';
export const RECEIVE_MOVIES = 'RECEIVE_OUR_MOVIES';

export const searchByName = (query) => {
  return (dispatch) => {
    SearchAPI.searchByName(query).then((payload) => {
      return dispatch(receiveMovies(payload));
    });
  };
};

export const searchByDateRange = (startDate, endDate) => {
  return (dispatch) => {
    SearchAPI.searchByDateRange(startDate, endDate).then((payload) => {
      return dispatch(receiveMovies(payload));
    });
  };
};

export const receiveMovies = (payload) => {
  return ({
    type: RECEIVE_MOVIES,
    payload: payload,
  });
};
