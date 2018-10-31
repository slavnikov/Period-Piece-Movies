import * as PeriodAPI from '../api/period_requests';

export const RECEIVE_PERIODS = 'RECEIVE_PERIODS';

export const fetchPeriods = () => {
  return (dispatch) => {
    PeriodAPI.fetchPeriods().then((periods) => {
      dispatch(receivePeriods(periods));
    });
  };
};

export const receivePeriods = (periods) => {
  return ({
    type: RECEIVE_PERIODS,
    periods: periods,
  });
};
