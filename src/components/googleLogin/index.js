import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';
import HomePage from '../HomePage';
import auth from '@react-native-firebase/auth';
import LoginScreen from './LoginScreen';

const LoginHandler = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Auth listener
    const unsubscribe = auth().onAuthStateChanged(user => {
      user ? setUser(user) : setUser(null);
      console.log('USER =>', user);
    });
    // return () => {
    //   unsubscribe();
    // };
  }, []);

  return (
    <SafeAreaView>
      {/* <StatusBar barStyle={'dark-content'} /> */}
      <View style={styles.viewStyle}>
        {user ? <HomePage /> : <LoginScreen />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#151718',
  },
  viewStyle: {
    height: '100%',
    alignItems: 'center',
  },
});

export default LoginHandler;
