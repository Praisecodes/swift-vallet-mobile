import { Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Layout from './layout';

const ProfileDetails = () => {
  return (
    <Layout>
      <View>
        <Text style={[tw`text-3xl leading-[30px]`, { fontFamily: "cabinet-bold" }]}>
          Profile Details
        </Text>
        <Text style={[tw`text-sm mb-9 leading-[30px] text-[#A0A4A8]`, { fontFamily: "sora" }]}>
          This is required please, to be able to setup your profile
        </Text>
      </View>
    </Layout>
  )
}

export default ProfileDetails
