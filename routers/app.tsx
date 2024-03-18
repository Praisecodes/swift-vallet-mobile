import React from 'react';
import { AppStack } from './types';
import { Home } from '../screens/app';

const App = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00BE5D",
        tabBarInactiveTintColor: "#A8A8A8",
        tabBarLabelStyle: { fontFamily: 'saro-medium' }
      }}
    >
      <AppStack.Screen name="home" component={Home} />
    </AppStack.Navigator>
  )
}

export default App;
