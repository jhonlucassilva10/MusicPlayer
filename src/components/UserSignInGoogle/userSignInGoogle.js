import React, { Component } from 'react';
import { ActivityIndicator, Alert,View } from 'react-native';
import { GoogleSignin, GoogleSigninButton,statusCodes } from '@react-native-community/google-signin';
import { PropTypes } from 'prop-types';



class UserSignIn extends Component {
  state = {
    isSigninInProgress: false,
    checkingSignedInStatus: false
  };

  constructor() {
    super();
    GoogleSignin.configure();
    this.screenFocusSubscription = {};
  }

  componentDidMount() {
    this.subscribeToDidFocus();
  }


  subscribeToDidFocus = () => {
    this.screenFocusSubscription = this.props.navigation.addListener('didFocus', () => {
      this.isUserSignedIn();
    });
  };

  componentWillUnmount() {
    this.screenFocusSubscription.remove();
  }

  render() {
    const { isSigninInProgress, checkingSignedInStatus } = this.state;

    if (checkingSignedInStatus) {
      return (
        <View>
          <ActivityIndicator size='large' color='#00ff00' />
        </View>
      );
    }

    return (
      <View>
        <GoogleSigninButton
          style={{ width: 200, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.onSignInPress}
          disabled={isSigninInProgress}
        />
      </View>
    );
  }

  /**
   * @name onSignInPress
   */
  onSignInPress = async () => {
    try {
      this.setState({ isSigninInProgress: true });

      // initiate google sign-in process
      await this.getGooglePlayServices();
      const googleAuthResponse = await GoogleSignin.signIn();

      this.dispatchOnSignIn(googleAuthResponse);

      this.setState({
        isSigninInProgress: false
      });

      this.props.navigation.navigate('Home');
    } catch (error) {
      this.handleSignInError(error);
    }
  };

  /**
   * @name dispatchOnSignIn
   */
  dispatchOnSignIn = googleAuthResponse => {
    this.props.UserSignIn_onSuccess({
      googleAuthToken: {
        id_token: googleAuthResponse.idToken,
        expires_at: googleAuthResponse.accessTokenExpirationDate
      },
      googleUser: googleAuthResponse.user
    });
  };

  /**
   * @name isUserSignedIn
   */
  isUserSignedIn = async () => {
    this.setState({ checkingSignedInStatus: true });
    const isUserSignedIn = await GoogleSignin.isSignedIn();
    if (isUserSignedIn) {
      await this.getCurrentUserInfo();
    }
    this.setState({ checkingSignedInStatus: false });
  };

  /**
   * @name handleSignInError
   * @param error the SignIn error object
   */
  handleSignInError = async error => {
    if (error.code) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        this.showSignInError('User cancelled the login flow.');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        this.showSignInError('Sign in is in progress.');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        await this.getGooglePlayServices();
      } else {
        this.showSignInError(JSON.stringify(error));
      }
    } else {
      this.showSignInError(JSON.stringify(error));
    }
    this.setState({ isSigninInProgress: false });
  };

  /**
   * @name getGooglePlayServices
   */
  getGooglePlayServices = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true
      });
      // google services are available
    } catch (err) {
      this.showSignInError('play services are not available');
    }
  };

  /**
   * @name showSignInError
   * @param alertMessage - message to be shown on alert box
   */
  showSignInError = alertMessage => {
    this.props.UserSignIn_onError({
      signInFailedReason: alertMessage
    });

    Alert.alert(
      'Google Signin Error',
      alertMessage,
      [
        {
          text: 'OK'
        }
      ],
      {
        cancelable: false
      }
    );
  };
}

UserSignIn.propTypes = {
  navigation: PropTypes.object.isRequired,
  UserSignIn_onSuccess: PropTypes.func.isRequired,
  UserSignIn_onError: PropTypes.func.isRequired,
};

export default UserSignIn;