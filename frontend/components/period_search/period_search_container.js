import { connect } from 'react-redux';
import PeriodSearch from './period_search';
import { searchByDateRange } from '../../actions/search_actions';
import { fetchPeriods } from '../../actions/period_actions';

const mapStateToProps = (state) => {
  return ({
    movies: state.movies,
    ourMovieIDs: state.searchResults.ourMovieIDs,
    periods: state.periods,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    searchByDateRange: (startYear, endYear) => dispatch(searchByDateRange(startYear, endYear)),
    fetchPeriods: () => dispatch(fetchPeriods()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PeriodSearch);
