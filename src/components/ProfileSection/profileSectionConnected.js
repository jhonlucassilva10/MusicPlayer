import { connect } from 'react-redux';
import ProfileSection from './profileSection';

const mapStateToProps = state => {
  return {googleUser: state.UserSignInReducer.googleUser}
};

export default connect(
  mapStateToProps
)(ProfileSection);
