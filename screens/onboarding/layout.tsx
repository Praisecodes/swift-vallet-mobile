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
    <View style={[tw`flex-1 bg-[#ffffff] relative flex flex-col`]}>
      <View style={[tw`flex-1 w-[100%] flex flex-row items-center justify-center px-5 py-5`]}>
        <Image
          source={image}
          style={[tw``]}
          resizeMode="contain"
        />
      </View>

      <View style={[tw`py-6 absolute flex flex-col gap-y-7 bottom-0 left-0 bg-[#ffffff] px-5`]}>
        <View style={[tw`mb-5 flex flex-col gap-y-4`]}>
          {icon}
          <Text style={[tw`text-3xl`, { fontFamily: "cabinet-bold" }]}>
            {title}
          </Text>
          {children}
        </View>

        <Indicator page={page} />

        <View style={[tw`flex flex-row items-center justify-between`]}>
          <TouchableWithoutFeedback onPress={() => { }}>
            <Text style={[tw`text-base px-3 py-3`, { fontFamily: "sora" }]}>
              Skip
            </Text>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={onNexClick}>
            <View style={[tw`bg-[#000000] p-4 flex flex-row items-center justify-center rounded-full `]}>
              <Entypo name="chevron-small-right" size={30} color={'#ffffff'} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  )
}

export default Layout;
