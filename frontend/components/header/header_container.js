import { connect } from 'react-redux';
import Header from './header';
import { createUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.users[state.session.currentUserId],
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createUser: (params) => dispatch(createUser(params)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
