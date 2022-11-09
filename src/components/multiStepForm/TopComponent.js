import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const TopComponent = () => {
  const navigation = useNavigation();

  const goToWelcome = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={{flex: 1}}>
      <ProgressSteps>
        <ProgressStep label="Personal Info">
          <View style={{alignItems: 'center'}}>
            <Step1 />
          </View>
        </ProgressStep>
        <ProgressStep label="Educational Info">
          <View style={{alignItems: 'center'}}>
            <Step2 />
          </View>
        </ProgressStep>
        <ProgressStep label="Address" onSubmit={() => goToWelcome()}>
          <View style={{alignItems: 'center'}}>
            <Step3 />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default TopComponent;
