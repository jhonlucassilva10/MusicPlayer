import React, { Component } from 'react';
import {TouchableOpacity,Text} from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';
import { PropTypes } from 'prop-types';
import styles from './styles';

class UserSignOut extends Component {
  render() {
    return (
      <TouchableOpacity  style={styles.button} onPress={() => this.signOut()}>
          <Text style={styles.title}>Sign out</Text>
      </TouchableOpacity>
    );
  }

  /**
   * @name signOut
   */
  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      // console.error(error);
    } finally {
      this.props.UserSignIn_logOut({});
      this.props.navigation.navigate('SignIn');
    }
  };

  componentFocusSubscription = this.props.navigation.addListener('didFocus', () => {
    if (!this.props.googleUser) {
      this.props.navigation.navigate('SignIn');
    }
  });

}

UserSignOut.propTypes = {
  navigation: PropTypes.object.isRequired,
  UserSignIn_logOut: PropTypes.func.isRequired
};

export default UserSignOut;