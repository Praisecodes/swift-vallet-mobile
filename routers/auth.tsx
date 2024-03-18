import React from 'react';
import { Login, Register } from '../screens/auth';
import { AuthStack } from './types';
import AccountSetup from './account_setup';

const Auth = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen name="register" component={Register} />
      <AuthStack.Screen name="account_setup" component={AccountSetup} />
    </AuthStack.Navigator>
  )
}

export default Auth;
