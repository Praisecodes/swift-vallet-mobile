import { Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import Layout from './layout';
import Input from '../../components/common/input';
// @ts-ignore
import Upload from '../../assets/icons/upload.svg';
import * as ImagePicker from 'expo-image-picker';
// @ts-ignore
import Image from '../../assets/icons/image.svg';
// @ts-ignore
import Success from '../../assets/icons/success.svg';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routers/types';

const CarDetails = ({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList, 'account_setup'> }) => {
  const [carDetails, setCarDetails] = useState<{ name: string; model: string; plate: string; color: string }>({
    name: "",
    model: "",
    plate: "",
    color: ""
  });

  const [carImage, setCarImage] = useState<any>(null);

  const pickCarImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1
    });

    console.log(result);

    if (!result.canceled) {
      setCarImage(result.assets[0]);
    }
  }

  return (
    <Layout>
      <View>
        <Text style={[tw`text-3xl leading-[30px]`, { fontFamily: "cabinet-bold" }]}>
          Car Details
        </Text>
        <Text style={[tw`text-sm mb-9 leading-[30px] text-[#A0A4A8]`, { fontFamily: "sora" }]}>
          Required to be able to setup your profile
        </Text>

        <View style={[tw`mb-10`]}>
          <Text style={[tw`text-sm text-[#344054] mb-2`, { fontFamily: "sora" }]}>
            Upload car image
          </Text>

          {carImage === null && (
            <TouchableWithoutFeedback onPress={pickCarImage}>
              <View style={[tw`w-[100%] gap-y-2 py-4 border border-[#EAECF0] rounded-md bg-[#F9FAFB] flex flex-col items-center justify-center`]}>
                <Upload width={50} height={50} />

                <Text style={[tw`text-base text-[#D0D5DD]`, { fontFamily: "sora-bold" }]}>
                  Click to upload
                </Text>

                <Text style={[tw`text-[#667085]`, { fontFamily: "sora" }]}>
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )}

          {carImage !== null && (
            <View style={[tw`border border-[#B4B7F0] rounded-md bg-[#FFFFFF] py-4 px-3`]}>
              <View style={[tw`flex flex-row justify-between`]}>
                <View style={[tw`flex flex-row gap-x-2`]}>
                  <Image width={35} height={35} />

                  <View>
                    <Text style={[tw`text-base text-[#344054] leading-[30px]`, { fontFamily: "sora" }]}>
                      {carImage.fileName}{"\n"}
                      <Text style={[tw`text-sm text-[#667085] leading-[25px]`]}>
                        {Math.round(carImage.filesize / 1024)} KB
                      </Text>
                    </Text>
                  </View>
                </View>

                <Success width={18} height={18} />
              </View>


            </View>
          )}
        </View>

        <View style={[tw`flex flex-col gap-y-7`]}>
          <View>
            <Text style={[tw`text-sm text-[#344054] mb-1`, { fontFamily: "sora" }]}>
              Car Name
            </Text>
            <Input
              placeholder="Acura Toyota"
              value={carDetails.name}
              translucent={false}
              keyboardType="default"
              onChangeText={(e) => { setCarDetails((carDetails) => ({ ...carDetails, name: e })) }}
              secureTextEntry={false}
            />
          </View>

          <View>
            <Text style={[tw`text-sm text-[#344054] mb-1`, { fontFamily: "sora" }]}>
              Model of car
            </Text>
            <Input
              placeholder="VW Zeta, quadron 2012 model"
              value={carDetails.model}
              translucent={false}
              keyboardType="default"
              onChangeText={(e) => { setCarDetails((carDetails) => ({ ...carDetails, model: e })) }}
              secureTextEntry={false}
            />
          </View>

          <View>
            <Text style={[tw`text-sm text-[#344054] mb-1`, { fontFamily: "sora" }]}>
              Car Plate Number
            </Text>
            <Input
              placeholder="A B J 3 4 5 V 7 8 R"
              value={carDetails.plate}
              translucent={false}
              keyboardType="default"
              onChangeText={(e) => { setCarDetails((carDetails) => ({ ...carDetails, plate: e })) }}
              secureTextEntry={false}
            />
          </View>

          <View>
            <Text style={[tw`text-sm text-[#344054] mb-1`, { fontFamily: "sora" }]}>
              Color of car
            </Text>
            <Input
              placeholder="Navy Blue"
              value={carDetails.color}
              translucent={false}
              keyboardType="default"
              onChangeText={(e) => { setCarDetails((carDetails) => ({ ...carDetails, color: e })) }}
              secureTextEntry={false}
            />
          </View>
        </View>

        <TouchableWithoutFeedback onPress={() => { }}>
          <Text style={[tw`w-[100%] text-center py-4 rounded-md text-base mt-14 bg-[#00BE5D] text-[#ffffff]`, { fontFamily: "sora" }]}>
            Next
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </Layout>
  )
}

export default CarDetails
