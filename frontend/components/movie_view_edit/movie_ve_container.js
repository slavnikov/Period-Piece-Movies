import { connect } from 'react-redux';
import MovieVE from './movie_ve';
import { fetchMovie, updateMovie } from '../../actions/movie_actions';

const mapStateToProps = (state, ownProps) => {
  let movie;
  
  if (ownProps.match.params.movie_id === 'new') {
    movie = state.session.tempMovie;
  } else {
    movie = state.movies[ownProps.match.params.movie_id];
  }

  return ({
    movie: movie,
    currentUser: state.users[state.session.currentUserId],
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchMovie: (id) => dispatch(fetchMovie(id)),
    updateMovie: (params) => dispatch(updateMovie(params)),
    createMovie: (params) => dispatch(createMovie(params)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieVE);
