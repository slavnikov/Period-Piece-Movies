import { connect } from 'react-redux';
import Header from './header';
import { createUser } from '../../actions/user_actions';
import { login, logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.users[state.session.currentUserId],
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createUser: (params) => dispatch(createUser(params)),
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
