import { Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Four, One, Three, Two } from '../screens/onboarding';
import { Stack } from './constant';

// const Stack = createNativeStackNavigator();

const Onboarding = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="one" component={One} />
      <Stack.Screen name="two" component={Two} />
      <Stack.Screen name="three" component={Three} />
      <Stack.Screen name="four" component={Four} />
    </Stack.Navigator>
  )
}

export default Onboarding
