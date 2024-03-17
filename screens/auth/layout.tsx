import { ScrollView, StatusBar, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
// @ts-ignore
import Logo from '../../assets/logo.svg';
// @ts-ignore
import Google from '../../assets/icons/auth/google.svg';
// @ts-ignore
import Apple from '../../assets/icons/auth/apple.svg';
import { useNavigation } from '@react-navigation/native';

const Layout = ({ children, page }: { children: React.ReactNode; page: "login" | "register" }) => {
  const navigation = useNavigation();

  return (
    <View style={[tw`flex-1 bg-[#ffffff]`]}>
      <ScrollView contentContainerStyle={[tw`pt-18 pb-5 px-5`]} style={[tw`min-h-[100%]`]}>
        {/* <StatusBar animated={true} barStyle="dark-content" /> */}
        <View style={[tw`mx-auto mb-10`]}>
          <Logo width={165.35} height={60} />
        </View>

        <Text style={[tw`mx-auto text-2xl leading-[30px]`, { fontFamily: "cabinet-bold" }]}>
          {page === "login" ? "Welcome Back!!" : "Sign up to create account"}
        </Text>
        <Text style={[tw`text-[#A0A4A8] text-sm mx-auto text-center leading-[30px]`, { fontFamily: "sora" }]}>
          We are here to solve your parking problem
        </Text>

        <View style={[tw`py-10`]}>
          {children}
        </View>

        <View style={[tw`px-4 flex flex-row items-center mb-10`]}>
          <View style={[tw`flex-1 h-[1px] bg-[#F1F1F1]`]}></View>
          <Text style={[tw`px-2 text-xs`, { fontFamily: "sora" }]}>
            or
          </Text>
          <View style={[tw`flex-1 h-[1px] bg-[#F1F1F1]`]}></View>
        </View>

        <View style={[tw`gap-y-4 mb-10`]}>
          <TouchableWithoutFeedback>
            <View style={[tw`flex flex-row items-center gap-x-4 justify-center w-[100%] py-3 rounded-md bg-[#F9FAFB]`]}>
              <Google width={24} height={24} />
              <Text style={[tw`text-xs`, { fontFamily: "sora" }]}>
                Sign in with Google
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={[tw`flex flex-row items-center gap-x-6 justify-center w-[100%] py-3 rounded-md bg-[#F9FAFB]`]}>
              <Apple width={27} height={27} />
              <Text style={[tw`text-xs`, { fontFamily: "sora" }]}>
                Sign in with Apple
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {page === "login" && (
          <Text style={[tw`text-xs mx-auto text-[#BABABA]`, { fontFamily: "sora-bold" }]}>
            Don't have an account?{" "}
            <Text
              style={[tw`text-[#00BE5D]`]}
              // @ts-ignore
              onPress={() => { navigation.navigate("register") }}
            >
              Create account
            </Text>
          </Text>
        )}

        {page === "register" && (
          <Text style={[tw`text-xs mx-auto text-[#BABABA]`, { fontFamily: "sora-bold" }]}>
            Already have an account?{" "}
            <Text
              style={[tw`text-[#00BE5D]`]}
              // @ts-ignore
              onPress={() => { navigation.navigate("login") }}>
              Sign in
            </Text>
          </Text>
        )}
      </ScrollView>
    </View>
  )
}

export default Layout;
