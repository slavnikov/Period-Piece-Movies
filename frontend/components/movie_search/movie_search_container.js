import { connect } from 'react-redux';
import { searchByName } from '../../actions/search_actions';
import { setTempMovie } from '../../actions/session_actions';
import MovieSearch from './movie_search';

const mapStateToProps = (state) => {
  return ({
    movies: state.movies,
    ourMovieIDs: state.searchResults.ourMovieIDs,
    tmdbMovies: state.searchResults.tmdbMovies,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    searchByName: (query) => dispatch(searchByName(query)),
    setTempMovie: (movie) => dispatch(setTempMovie(movie)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
