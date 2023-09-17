/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Webview from './Screens/Webview';
import AppLoader from './Screens/AppLoader';
import SplashScreen from './Screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Easing } from 'react-native';
import Home from './Screens/Home';
import Next from './Screens/Next';
import { createNativeStackNavigator,CardStyleInterpolators, TransitionPresets } from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();

  const config ={
    animation:'spring',
    config : {
      stiffness:1000,
      damping:50,
      overshootClamping:false,
      resDisplacementThreshold:0.1,
      restSpeedThreshold:0.1
    }
  }
  const closeConfig = {
    animation: 'timing',
      config: {
        duration:900,
        easing: Easing.linear
      }
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false,
        gestureEnabled:true,
        gestureDirection:"horizontal",
        transitionSpec: {
            open: config,
            close: closeConfig
          },
        }}
          headerMode="float"
          animation='fade'
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Next" component={Next} />
          <Stack.Screen name="Webview" component={Webview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
