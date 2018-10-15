import { connect } from 'react-redux';
import PeriodSearch from './period_search';
import { searchByDateRange } from '../../actions/search_actions';

const mapStateToProps = (state) => {
  return ({
    movies: state.movies,
    ourMovieIDs: state.searchResults.ourMovieIDs,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    searchByDateRange: (startDate, endDate) => dispatch(searchByDateRange(startDate, endDate)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PeriodSearch);
