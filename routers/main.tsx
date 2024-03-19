// import { Text, View } from 'react-native'
import React from 'react';
import { RootStack } from './types';
import { Home } from '../screens/app';
import Auth from './auth';
import AccountSetup from './account_setup';
import App from './app';

const Main = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="auth" component={Auth} />
      <RootStack.Screen name="account_setup" component={AccountSetup} />
      <RootStack.Screen name="app" component={App} />
    </RootStack.Navigator>
  )
}

export default Main;
