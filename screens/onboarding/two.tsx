import { Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Layout from './layout';
// @ts-ignore
import Icon from '../../assets/icons/onboarding/two.svg';

const Two = ({ navigation }: any) => {
  return (
    <Layout
      page={2}
      onNexClick={() => { navigation.navigate("three") }}
      image={require("../../assets/images/onboarding/two.png")}
      icon={<Icon width={17} height={17} />}
      title="Secure your vehicle"
    >
      <Text style={[tw`text-[14px]`, { fontFamily: "sora" }]}>
        Scan our quick response code, for valet details and amazing payment method,
        to ensure better and seamless transaction.
      </Text>
    </Layout>
  )
}

export default Two;
