import { connect } from 'react-redux';
import { searchByName } from '../../actions/search_actions';
import MovieSearch from './movie_search';

const mapStateToProps = (state) => {
  return ({

  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    searchByName: (query) => dispatch(searchByName(query)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
