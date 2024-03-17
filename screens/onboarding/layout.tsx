import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Indicator from '../../components/onboarding/indicator';
import { Entypo } from '@expo/vector-icons';

interface props {
  image: any;
  title: string;
  onNexClick: (() => any);
  icon: any;
  children: React.ReactNode;
  page: number;
}

const Layout = ({ image, title, onNexClick, icon, children, page }: props) => {
  return (
    <View style={[tw`flex-1 relative flex flex-col`]}>
      <View style={[tw`flex-1 px-10 py-5`]}>
        <Image
          source={image}
          style={[tw``]}
          resizeMode="contain"
        />
      </View>

      <View style={[tw`py-6 absolute bottom-0 left-0 bg-[#ffffff] px-5`]}>
        <View style={[tw`mb-5`]}>
          {icon}
          <Text style={[tw`text-[24px]`, { fontFamily: "cabinet-bold" }]}>
            {title}
          </Text>
          {children}
        </View>

        <Indicator page={page} />

        <View style={[tw`flex items-row justify-between`]}>
          <TouchableWithoutFeedback onPress={() => { }}>
            <Text style={[tw`text-sm px-3 py-3`, { fontFamily: "sora" }]}>
              Skip
            </Text>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={onNexClick}>
            <View style={[tw`bg-[#000000] h-[50px] w-[50px] rounded-full`]}>
              <Entypo name="chevron-small-right" size={17.03} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  )
}

export default Layout;
