import React from 'react';
import {Text, View} from 'react-native';

const Welcome = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff475a',
      }}>
      <Text style={{color: '#ffffff', fontSize: 50, fontWeight: 'bold'}}>
        WELCOME
      </Text>
    </View>
  );
};

export default Welcome;
