import { NavigationContainer } from '@react-navigation/native';
import { Onboarding } from './routers';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    "cabinet-bold": require("./assets/fonts/CabinetGrotesk-Bold.otf"),
    "cabinet": require('./assets/fonts/CabinetGrotesk-Regular.otf'),
    "cabinet-medium": require("./assets/fonts/CabinetGrotesk-Medium.otf"),
    "sora": require('./assets/fonts/Sora-Regular.ttf'),
    "sora-bold": require('./assets/fonts/Sora-Bold.ttf'),
    "sora-medium": require('./assets/fonts/Sora-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <NavigationContainer>
      <Onboarding />
    </NavigationContainer>
  );
}
