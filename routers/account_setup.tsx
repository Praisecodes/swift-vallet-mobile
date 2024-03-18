import { StyleSheet } from 'react-native';
import React from 'react';
import { CarDetails, ProfileDetails, Verification } from '../screens/account_setup';
import { SetupStack } from './types';

const AccountSetup = () => {
  return (
    <SetupStack.Navigator screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
      <SetupStack.Screen name="verification" component={Verification} />
      <SetupStack.Screen name="profile_details" component={ProfileDetails} />
      <SetupStack.Screen name="car_details" component={CarDetails} />
    </SetupStack.Navigator>
  )
}

export default AccountSetup

const styles = StyleSheet.create({})