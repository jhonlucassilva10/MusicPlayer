import { connect } from 'react-redux';
import UserSignIn from './UserSignIn';
import { UserSignIn_onSuccess, UserSignIn_onError, UserSignIn_logOut } from '../../redux/actions/UserSignIn/UserSignInActions';

// const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => ({
  UserSignIn_onSuccess: data => {
    dispatch(UserSignIn_onSuccess(data));
  },
  UserSignIn_onError: data => {
    dispatch(UserSignIn_onError(data));
  },
  UserSignIn_logOut: data => {
    dispatch(UserSignIn_logOut(data));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(UserSignIn);