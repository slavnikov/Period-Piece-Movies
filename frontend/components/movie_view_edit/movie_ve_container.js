import { connect } from 'react-redux';
import MovieVE from './movie_ve';

const mapStateToProps = (state) => {
  return ({
    movies: state.movies,
  });
};

export default connect(mapStateToProps)(MovieVE);
