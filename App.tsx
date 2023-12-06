import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,

} from 'react-native';
import { NativeEventEmitter, NativeModules } from 'react-native';

function App(): JSX.Element {

const YourReactNativeModule = NativeModules.YourReactNativeModule;

// Subscribe to the event
const devicePlatformEmitter = new NativeEventEmitter(YourReactNativeModule);

devicePlatformEmitter.addListener('onDevicePlatform', (devicePlatformInfo) => {
    console.log('Device Platform:', devicePlatformInfo);
});

// Call the method
YourReactNativeModule.getDevicePlatform();


  return (
    <SafeAreaView >
      <Text>"hello, World !"</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

export default App;
