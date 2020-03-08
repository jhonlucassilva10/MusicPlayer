import { connect } from 'react-redux';
import UserSignOut from './userSignOut';
import {UserSignIn_logOut } from '../../redux/actions/UserSignIn/UserSignInActions';

const mapDispatchToProps = dispatch => ({

  UserSignIn_logOut: data => {
    dispatch(UserSignIn_logOut(data));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(UserSignOut);