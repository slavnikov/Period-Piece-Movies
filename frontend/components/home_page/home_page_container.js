import { connect } from 'react-redux';
import HomePage from './home_page';
import { fetchRecent } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  const recentMovies = state.session.recentMovies || [];

  return ({
    recentMovies: recentMovies.map((recentID) => {
      return state.movies[recentID];
    })
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchRecent: () => dispatch(fetchRecent()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
