import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';

const Camera = () => {
  const [responseCamera, setResponseCamera] = useState([]);
  const [responseGallery, setResponseGallery] = useState([]);

  const openCameraWithPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchCamera(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
          },
          response => {
            console.log(response);
            setResponseCamera(response);
          },
        );
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 4,
      }}>
      <TouchableOpacity onPress={() => openCameraWithPermission()}>
        {responseCamera.didCancel === true || responseCamera == '' ? (
          <Image
            style={styles.icon}
            source={require('../icons/camera.png')}
          />
        ) : (
          <Image style={styles.icon} source={{uri: responseCamera.uri}} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          launchImageLibrary(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            },
            response => {
              setResponseGallery(response);
            },
          )
        }>
        {responseGallery.didCancel === true || responseGallery == '' ? (
          <Image
            style={styles.icon}
            source={require('../icons/gallery.jpg')}
          />
        ) : (
          <Image style={styles.icon} source={{uri: responseGallery.uri}} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 50,
    width: 50,
  },
});

export default Camera;
