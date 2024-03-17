import { Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Layout from './layout';
// @ts-ignore
import Icon from '../../assets/icons/onboarding/four.svg';
import { storeData } from '../../states/async_storage';
import { useAppStore } from '../../states/zustand';

const Four = ({ navigation }: any) => {
  const setOnboarded = useAppStore(state => state.setOnboarded);

  return (
    <Layout
      page={4}
      onNexClick={async () => {
        if (await storeData("onboarded", "true")) {
          setOnboarded(true);
        }
      }}
      image={require("../../assets/images/onboarding/four.png")}
      icon={<Icon width={17} height={17} />}
      title="Profile setup"
    >
      <Text style={[tw`text-[15px]`, { fontFamily: "sora" }]}>
        we will allow you set up your profile and give you an opportunity to
        add all the amazing cars in your possession.
      </Text>
    </Layout>
  )
}

export default Four;
