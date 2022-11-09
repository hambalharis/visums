import React from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Animation1 = () => {
  const handleViewRef = ref => (view = ref);

  const bounce = () =>
    view
      .bounce(800)
      .then(endState =>
        console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'),
      );

  return (
    <TouchableWithoutFeedback onPress={() => bounce()}>
      <Animatable.View
        ref={handleViewRef}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 30, color: '#733236'}}>
          Bounce me!
        </Text>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
};

export default Animation1;
