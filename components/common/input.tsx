import { KeyboardTypeOptions, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { Feather } from '@expo/vector-icons';

interface props {
  translucent: boolean;
  placeholder: string;
  value: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: ((text: string) => void);
  secureTextEntry: boolean;
}

const Input = ({ translucent, placeholder, value, keyboardType, onChangeText, secureTextEntry }: props) => {
  const [isPassword, setIsPassword] = useState<boolean>(secureTextEntry);

  return (
    <View style={[tw`${translucent ? "bg-[#F9F9F9]" : "bg-transparent border"} flex border-[#D0D5DD] rounded-md flex-row items-center`]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        style={[tw`flex-1 py-3 px-3`, { fontFamily: "sora" }]}
        onChangeText={onChangeText}
        secureTextEntry={isPassword}
      />

      {secureTextEntry && (
        <TouchableWithoutFeedback onPress={() => { setIsPassword(!isPassword) }}>
          <View style={[tw`flex flex-row items-center gap-x-1 px-3`]}>
            <Feather name={isPassword ? "eye" : "eye-off"} color={'#A0A4A8'} size={13} />
            <Text style={[tw`text-[#A0A4A8] py-3`, { fontFamily: "sora" }]}>
              {isPassword ? "Show" : "Hide"}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  )
}

export default Input;
