import { connect } from 'react-redux';
import MovieCreate from './movie_create';
import { createMovie } from '../../actions/movie_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    tmdbMovie: state.searchResults.tmdbMovies[ownProps.match.params.ref_movie_id],
    movies: state.movies,
    currentUser: state.users[state.session.currentUserId],
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createMovie: (params) => dispatch(createMovie(params)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCreate);
