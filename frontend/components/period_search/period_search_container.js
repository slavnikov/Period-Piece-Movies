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
    searchByDateRange: (startYear, endYear) => dispatch(searchByDateRange(startYear, endYear)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PeriodSearch);
