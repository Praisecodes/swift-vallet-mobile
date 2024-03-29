import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type AccountSetupParamList = {
  verification: undefined;
  profile_details: undefined;
  car_details: undefined;
}

type AuthStackParamList = {
  login: undefined;
  register: undefined;
  account_setup: NavigatorScreenParams<AccountSetupParamList>;
}

type AppStackParamList = {
  home: undefined;
  transactions: undefined;
  notifications: undefined;
  account: undefined;
}

export type RootStackParamList = {
  auth: NavigatorScreenParams<AuthStackParamList>;
  account_setup: NavigatorScreenParams<AccountSetupParamList>;
  app: NavigatorScreenParams<AppStackParamList>;
}

export const AuthStack = createNativeStackNavigator<AuthStackParamList>();
export const SetupStack = createNativeStackNavigator<AccountSetupParamList>();
export const AppTabs = createBottomTabNavigator<AppStackParamList>();
export const RootStack = createNativeStackNavigator<RootStackParamList>();
export const Stack = createNativeStackNavigator();
