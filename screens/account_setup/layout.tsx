import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Layout = ({ children }: { children: React.ReactNode; }) => {
  const navigation = useNavigation();

  return (
    <View style={[tw`flex-1 bg-white`]}>
      <ScrollView style={[tw`min-h-[90%]`]} contentContainerStyle={[tw`px-5 pt-14 pb-8`]}>
        <TouchableWithoutFeedback onPress={() => { navigation.goBack(); }}>
          <View style={[tw`w-[55px] h-[55px] flex flex-row mb-10 items-center justify-center bg-[#F7F7F7] rounded-full`]}>
            <Entypo name="chevron-left" color={'#272727'} size={22} />
          </View>
        </TouchableWithoutFeedback>

        {children}
      </ScrollView>
    </View>
  )
}

export default Layout;
