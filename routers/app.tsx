import React from 'react';
import { AppTabs } from './types';
import { Account, Home, Notifications, Transactions } from '../screens/app';
// @ts-ignore
import HomeIcon from '../assets/icons/tabs/home.svg';
// @ts-ignore
import Home_focused from '../assets/icons/tabs/home-focused.svg';
// @ts-ignore
import TransactionsIcon from '../assets/icons/tabs/transactions.svg';
// @ts-ignore
import Transactions_focused from '../assets/icons/tabs/transactions-focused.svg';
// @ts-ignore
import Notifs from '../assets/icons/tabs/notifs.svg';
// @ts-ignore
import Notifs_focused from '../assets/icons/tabs/notifs-focused.svg';
// @ts-ignore
import AccountIcon from '../assets/icons/tabs/account.svg';
// @ts-ignore
import Account_focused from '../assets/icons/tabs/account-focused.svg';

const App = () => {
  return (
    <AppTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00BE5D",
        tabBarInactiveTintColor: "#A8A8A8",
        tabBarLabelStyle: { fontFamily: 'sora-medium', textTransform: "capitalize", fontSize: 12 },
        tabBarStyle: { height: 69, elevation: 0, paddingBottom: 6 }
      }}
    >
      <AppTabs.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: (({ focused }) => (
            focused ? <Home_focused width={22} height={22} /> : <HomeIcon width={22} height={22} />
          ))
        }}
      />

      <AppTabs.Screen
        name="transactions"
        component={Transactions}
        options={{
          tabBarIcon: (({ focused }) => (
            focused ? <Transactions_focused width={22} height={22} /> : <TransactionsIcon width={22} height={22} />
          ))
        }}
      />

      <AppTabs.Screen
        name="notifications"
        component={Notifications}
        options={{
          tabBarIcon: (({ focused }) => (
            focused ? <Notifs_focused width={22} height={22} /> : <Notifs width={22} height={22} />
          ))
        }}
      />

      <AppTabs.Screen
        name="account"
        component={Account}
        options={{
          tabBarIcon: (({ focused }) => (
            focused ? <Account_focused width={22} height={22} /> : <AccountIcon width={22} height={22} />
          ))
        }}
      />
    </AppTabs.Navigator>
  )
}

export default App;
