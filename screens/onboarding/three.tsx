import { Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Layout from './layout';
// @ts-ignore
import Icon from '../../assets/icons/onboarding/three.svg';

const Three = ({ navigation }: any) => {
  return (
    <Layout
      page={3}
      onNexClick={() => { navigation.navigate("four") }}
      image={require("../../assets/images/onboarding/three.png")}
      icon={<Icon width={17} height={17} />}
      title="Seamless transactions"
    >
      <Text style={[tw`text-[14px]`, { fontFamily: "sora" }]}>
        we have the easiest method for payment with the use of any choose of yours,
        we automatically makes you feel comfortable during payment.
      </Text>
    </Layout>
  )
}

export default Three;
