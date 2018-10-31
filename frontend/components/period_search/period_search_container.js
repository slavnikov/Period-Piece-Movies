import { connect } from 'react-redux';
import PeriodSearch from './period_search';
import { searchByDateRange } from '../../actions/search_actions';
import { fetchPeriods } from '../../actions/period_actions';

const mapStateToProps = (state) => {
  const periodFilters = state.periods.period_filters || {};
  const timePeriods = state.periods.time_periods || {};

  return ({
    movies: state.movies,
    ourMovieIDs: state.searchResults.ourMovieIDs,
    periodFilters: periodFilters,
    timePeriods: timePeriods,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    searchByDateRange: (startYear, endYear) => dispatch(searchByDateRange(startYear, endYear)),
    fetchPeriods: () => dispatch(fetchPeriods()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PeriodSearch);
