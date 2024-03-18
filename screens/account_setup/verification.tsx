import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import Layout from './layout';
import OTPTextInput from 'react-native-otp-textinput';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routers/types';

const Verification = ({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList, 'account_setup'> }) => {
  const [otpCode, setOtpCode] = useState<string>("");

  useEffect(() => {
    if (otpCode.trim().length === 4) {
      navigation.navigate("account_setup", { screen: "profile_details" });
    }
  }, [otpCode]);

  return (
    <Layout>
      <View>
        <Text style={[tw`text-3xl leading-[30px]`, { fontFamily: "cabinet-bold" }]}>
          Email Verification
        </Text>
        <Text style={[tw`text-sm mb-9 leading-[30px] text-[#A0A4A8]`, { fontFamily: "sora" }]}>
          Enter the 4 digit code sent to your email address
        </Text>

        <OTPTextInput
          handleTextChange={(code) => { setOtpCode(code); }}
          textInputStyle={{ borderWidth: 1, borderColor: '#DFDFDF', borderRadius: 4, width: 60, height: 60, borderBottomWidth: 1 }}
          tintColor={'#DFDFDF'}
          autoFocus={true}
        />
      </View>
    </Layout>
  )
}

export default Verification
