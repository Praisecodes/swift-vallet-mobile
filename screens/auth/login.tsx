import { Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import Layout from './layout';
import Input from '../../components/common/input';

const Login = () => {
  const [payload, setPayload] = useState<{
    email: string;
    password: string;
  }>({
    "email": "",
    "password": ""
  });

  return (
    <Layout page="login">
      <View style={[tw`flex flex-col gap-y-5`]}>
        <View>
          <Text style={[tw`text-sm text-[#344054] mb-1`, { fontFamily: "sora" }]}>
            Email
          </Text>
          <Input
            placeholder="user@example.com"
            value={payload.email}
            translucent={false}
            keyboardType="email-address"
            onChangeText={(e) => { setPayload((value) => ({ ...value, email: e })) }}
            secureTextEntry={false}
          />
        </View>

        <View>
          <Text style={[tw`text-sm text-[#344054] mb-1`, { fontFamily: "sora" }]}>
            Password
          </Text>
          <Input
            placeholder="Password"
            value={payload.password}
            translucent={false}
            onChangeText={(e) => { setPayload((value) => ({ ...value, password: e })) }}
            secureTextEntry={true}
          />
        </View>

        <TouchableWithoutFeedback onPress={() => { console.log(payload) }}>
          <Text style={[tw`bg-[#00BE5D] text-base mt-3 text-[#ffffff] w-[100%] py-4 text-center rounded-md`, { fontFamily: "sora" }]}>
            Sign in
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </Layout>
  )
}

export default Login
