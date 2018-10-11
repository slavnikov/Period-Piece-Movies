import { connect } from 'react-redux';
import MovieVE from './movie_ve';
import { fetchMovie } from '../../actions/movie_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    movie: state.movies[ownProps.match.params.movie_id],
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchMovie: (id) => dispatch(fetchMovie(id)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieVE);
