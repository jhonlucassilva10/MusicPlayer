import { connect } from 'react-redux';
import Avatar from './avatar';

const mapStateToProps = state => {
  return {googleUser: state.UserSignInReducer.googleUser}
};

export default connect(
  mapStateToProps
)(Avatar);
