import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, LogBox} from 'react-native';
import Camera from './src/components/Camera';
import HomePage from './src/components/HomePage';
import PagerView from './src/components/PagerView';
import SplashScreen from 'react-native-splash-screen';
import ImageZoom from './src/components/ImageZoom';
import ChatUi from './src/components/ChatUi';
import Animations from './src/components/animations/Animations';
import TopComponent from './src/components/multiStepForm/TopComponent';
import Welcome from './src/components/multiStepForm/Welcome';
import CustomAnimations from './src/components/animations/CustomAnimations';
import Animation1 from './src/components/animations/Animation1';
import Animation2 from './src/components/animations/Animation2';
import Animation3 from './src/components/animations/Animation3';
import LoginHandler from './src/components/googleLogin';
import Search from './src/components/SearchBar';
import NativeBaseExample from './src/components/nativeBase/NativeBaseExample';

const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {LogBox.ignoreAllLogs()}
      <View style={styles.bottomSafeArea}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="LoginHandler"
              component={LoginHandler}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Homepage"
              component={HomePage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Camera"
              component={Camera}
              options={{title: 'Image Picker'}}
            />
            <Stack.Screen name="PagerView" component={PagerView} />
            <Stack.Screen
              name="ImageZoom"
              component={ImageZoom}
              options={{title: 'Zoomabe View'}}
            />
            <Stack.Screen
              name="ChatUi"
              component={ChatUi}
              options={{title: 'Chat UI'}}
            />
            <Stack.Screen name="Animations" component={Animations} />
            <Stack.Screen
              name="TopComponent"
              component={TopComponent}
              options={{title: 'Multi Step Form'}}
            />
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{title: 'Welcome Screen'}}
            />
            <Stack.Screen
              name="CustomAnimations"
              component={CustomAnimations}
              options={{title: 'Custom Animations'}}
            />
            <Stack.Screen
              name="Animation1"
              component={Animation1}
              options={{title: 'Animation 1'}}
            />
            <Stack.Screen
              name="Animation2"
              component={Animation2}
              options={{title: 'Animation 2'}}
            />
            <Stack.Screen
              name="Animation3"
              component={Animation3}
              options={{title: 'Animation 3'}}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{title: 'Search Bar'}}
            />
            <Stack.Screen
              name="NativeBaseExample"
              component={NativeBaseExample}
              options={{title: 'Native Base Example'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSafeArea: {
    flex: 1,
  },
});

export default App;
