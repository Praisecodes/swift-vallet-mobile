import { StyleSheet } from 'react-native';
import React from 'react';
import { CarDetails, ProfileDetails, Verification } from '../screens/account_setup';
import { Stack } from './constant';

const AccountSetup = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="verification" component={Verification} />
      <Stack.Screen name="profile_details" component={ProfileDetails} />
      <Stack.Screen name="car_details" component={CarDetails} />
    </Stack.Navigator>
  )
}

export default AccountSetup

const styles = StyleSheet.create({})