import { Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Layout from './layout';
// @ts-ignore
import Icon from '../../assets/icons/onboarding/one.svg';

const One = ({ navigation }: any) => {
  return (
    <Layout
      page={1}
      onNexClick={() => { navigation.navigate("two") }}
      image={require("../../assets/images/onboarding/one.png")}
      icon={<Icon width={20} height={20} />}
      title="Create account with us"
    >
      <Text style={[tw`text-[14px]`, { fontFamily: "sora" }]}>
        Creating account with us gives you the privilege to have personal connection
        with our valet and enjoy free trial.
      </Text>
    </Layout>
  )
}

export default One;
