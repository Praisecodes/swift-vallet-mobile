import { NavigationContainer } from '@react-navigation/native';
import { Auth, Main, Onboarding } from './routers';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { getData } from './states/async_storage';
import { useAppStore } from './states/zustand';

export default function App() {
  const [fontsLoaded] = useFonts({
    "cabinet-bold": require("./assets/fonts/CabinetGrotesk-Bold.otf"),
    "cabinet": require('./assets/fonts/CabinetGrotesk-Regular.otf'),
    "cabinet-medium": require("./assets/fonts/CabinetGrotesk-Medium.otf"),
    "sora": require('./assets/fonts/Sora-Regular.ttf'),
    "sora-bold": require('./assets/fonts/Sora-Bold.ttf'),
    "sora-medium": require('./assets/fonts/Sora-Medium.ttf'),
  });

  const onboarded = useAppStore(state => state.onboarded);
  const setOnboarded = useAppStore(state => state.setOnboarded);

  useEffect(() => {
    const checkOnboarded = async () => {
      if (await getData('onboarded') === null) {
        setOnboarded(false);
        return;
      }

      setOnboarded(true);
    }

    checkOnboarded();
  }, []);

  if (!fontsLoaded) {
    return;
  }

  return (
    <NavigationContainer>
      {onboarded ? <Main /> : <Onboarding />}
    </NavigationContainer>
  );
}
