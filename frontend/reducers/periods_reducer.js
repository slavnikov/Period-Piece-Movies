import { RECEIVE_PERIODS } from '../actions/period_actions';

const PeriodsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PERIODS:
      return action.periods;
    default:
      return state;
  }
};

export default PeriodsReducer;
