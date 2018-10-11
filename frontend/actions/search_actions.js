import * as SearchAPI from '../api/search_requests';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

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
    type: RECEIVE_SEARCH_RESULTS,
    payload: payload,
  });
};
