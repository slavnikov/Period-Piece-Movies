import { connect } from 'react-redux';
import Header from './header';
import { createUser } from '../../actions/user_actions';

const mapDispatchToProps = (dispatch) => {
  return ({
    createUser: (params) => dispatch(createUser(params)),
  });
};

export default connect(null, mapDispatchToProps)(Header);
