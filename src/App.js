import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen, NewExpenseScreen, WalletScreen } from './screens/'

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    border: 'transparent',
  }
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home">
          {props => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="NewExpense">
          {props => <NewExpenseScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Wallet">
          {props => <WalletScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}