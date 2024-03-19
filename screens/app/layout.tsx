import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Layout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <View style={[tw`flex-1 bg-[#ffffff] pt-7 px-4`]}>
      <ScrollView style={[tw`min-h-[90%]`]} contentContainerStyle={[tw`pb-4`]}>
        {children}
      </ScrollView>
    </View>
  )
}

export default Layout;
