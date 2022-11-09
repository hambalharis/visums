import React from 'react';
import {Image, useWindowDimensions, View} from 'react-native';
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';

const ImageZoom = () => {
  const Dimensions = useWindowDimensions();
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <ReactNativeZoomableView
        maxZoom={4}
        minZoom={0.8}
        zoomStep={0.5}
        initialZoom={1}
        bindToBorders={true}>
        <Image
          source={require('../images/launch_screen.jpeg')}
          style={{
            width: Dimensions.width,
            height: Dimensions.height,
            resizeMode: 'center',
          }}
        />
      </ReactNativeZoomableView>
    </View>
  );
};

export default ImageZoom;
