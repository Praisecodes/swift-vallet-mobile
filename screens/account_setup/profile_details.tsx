import { Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import Layout from './layout';
import Input from '../../components/common/input';

const ProfileDetails = ({ navigation }: any) => {
  const [profile, setProfile] = useState<{ name: string; phone: string; address: string }>({
    name: "",
    address: "",
    phone: ""
  });

  return (
    <Layout>
      <View>
        <Text style={[tw`text-3xl leading-[30px]`, { fontFamily: "cabinet-bold" }]}>
          Profile Details
        </Text>
        <Text style={[tw`text-sm mb-9 leading-[30px] text-[#A0A4A8]`, { fontFamily: "sora" }]}>
          This is required please, to be able to setup your profile
        </Text>

        <View style={[tw`flex flex-col gap-y-7`]}>
          <View>
            <Text style={[tw`text-sm text-[#344054] mb-1`, { fontFamily: "sora" }]}>
              What do we call you?
            </Text>
            <Input
              placeholder="Tell us your name"
              value={profile.name}
              translucent={false}
              keyboardType="default"
              onChangeText={(e) => { setProfile((profile) => ({ ...profile, name: e })) }}
              secureTextEntry={false}
            />
          </View>

          <View>
            <Text style={[tw`text-sm text-[#344054] mb-1`, { fontFamily: "sora" }]}>
              Mobile Number
            </Text>
            <Input
              placeholder="+234 802 837 2983"
              value={profile.phone}
              translucent={false}
              keyboardType="phone-pad"
              onChangeText={(e) => { setProfile((profile) => ({ ...profile, phone: e })) }}
              secureTextEntry={false}
            />
          </View>

          <View>
            <Text style={[tw`text-sm text-[#344054] mb-1`, { fontFamily: "sora" }]}>
              Address
            </Text>
            <Input
              placeholder="What's your address?"
              value={profile.address}
              translucent={false}
              keyboardType="default"
              onChangeText={(e) => { setProfile((profile) => ({ ...profile, address: e })) }}
              secureTextEntry={false}
            />
          </View>
        </View>

        <TouchableWithoutFeedback onPress={() => { navigation.navigate("car_details") }}>
          <Text style={[tw`w-[100%] text-center py-4 rounded-md text-base mt-18 bg-[#00BE5D] text-[#ffffff]`, { fontFamily: "sora" }]}>
            Next
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </Layout>
  )
}

export default ProfileDetails
