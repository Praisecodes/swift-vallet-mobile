import React from 'react';
import { Login, Register } from '../screens/auth';
import { Stack } from './constant';
import AccountSetup from './account_setup';

const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="account_setup" component={AccountSetup} />
    </Stack.Navigator>
  )
}

export default Auth;
