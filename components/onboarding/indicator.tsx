import { View } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Indicator = ({ page }: { page: number; }) => {
  return (
    <View style={[tw`flex gap-x-2 flex-row mx-auto`]}>
      {Array.from({ length: 4 }).map((_, index) => (
        <View key={index} style={[tw`${index + 1 === page ? "bg-[#00BE5D]" : "bg-[#3939393D]"} w-[20.91px] h-[2.39px]`]} />
      ))}
    </View>
  )
}

export default Indicator
