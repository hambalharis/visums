import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSigninButton,
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import {View, StyleSheet} from 'react-native';
import {LoginManager, AccessToken, LoginButton} from 'react-native-fbsdk-next';

const LoginScreen = () => {
  useEffect(() => {
    // Initialize google sign in
    GoogleSignin.configure({
      // Pulled from Google Authentication settings in Firebase console
      // androidClientId:
      //   '845555372532-fqb1a6e0hv35ga5qdk3aeou4g42n6ijo.apps.googleusercontent.com',
      webClientId:
        '845555372532-bhbv9sm8m9ob0st08u35an5il1nu4rfe.apps.googleusercontent.com',
    });
  }, []);

  const handleLogin = async () => {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFbLogin = async () => {
    try {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      // Sign-in the user with the credential
      return auth().signInWithCredential(facebookCredential);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleLogin}
      />
      <LoginButton
        style={{
          width: 215,
          height: 45,
        }}
        // onLoginFinished={handleFbLogin}
        onLogoutFinished={() => console.log('logout.')}
        onPress={handleFbLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#151718',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButton: {width: 225, height: 60},
});

export default LoginScreen;
