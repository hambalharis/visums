import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import PagerView from 'react-native-pager-view';

const MyPager = () => {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View style={styles.container} key="1">
        <Image style={styles.image} source={require('../images/demo1.jpg')} />
      </View>
      <View style={styles.container} key="2">
        <Image style={styles.image} source={require('../images/demo2.png')} />
      </View>
      <View style={styles.container} key="3">
        <Image style={styles.image} source={require('../images/demo3.png')} />
      </View>
      <View style={styles.container} key="4">
        <Image style={styles.image} source={require('../images/demo4.png')} />
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  image: {
    width: '70%',
    height: '70%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
});

export default MyPager;
