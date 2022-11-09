import React, {useEffect, useState} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  useWindowDimensions,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';

const Animations = () => {
  const [progress] = useState(new Animated.Value(0));
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.box,
            box1 ? {backgroundColor: '#d9fffb'} : {backgroundColor: '#c44127'},
          ]}
          onPress={() => setBox1(!box1)}>
          {box1 ? (
            <LottieView
              source={require('../../animations/91683-settings-sliders.json')}
              progress={progress}
              autoPlay
              loop
            />
          ) : (
            <Text style={styles.text}>Play</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.box,
            box2 ? {backgroundColor: '#d9fffb'} : {backgroundColor: '#c44127'},
          ]}
          onPress={() => setBox2(!box2)}>
          {box2 ? (
            <LottieView
              style={{width: 300, height: '100%'}}
              source={require('../../animations/81807-meditation-skull.json')}
              progress={progress}
              autoPlay
              loop
            />
          ) : (
            <Text style={styles.text}>Play</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.box,
            box3 ? {backgroundColor: '#d9fffb'} : {backgroundColor: '#c44127'},
          ]}
          onPress={() => setBox3(!box3)}>
          {box3 ? (
            <LottieView
              source={require('../../animations/91045-lunch-time.json')}
              progress={progress}
              autoPlay
              loop
            />
          ) : (
            <Text style={styles.text}>Play</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b5b5b5',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
    height: '100%',
    width: '100%',
  },

  box: {
    width: '85%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#052954',
  },
});

export default Animations;
