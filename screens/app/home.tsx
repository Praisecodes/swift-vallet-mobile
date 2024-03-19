import { BackHandler, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { AppNavigation } from './constants';
import tw from 'twrnc';
import Layout from './layout';

const Home = ({ navigation }: { navigation: AppNavigation }) => {

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      BackHandler.exitApp();
    });
  }, [navigation]);

  return (
    <Layout>
      <Text>Home</Text>
    </Layout>
  )
}

export default Home;
