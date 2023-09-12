import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import BottomTabNavigator from './bottomTabNavigator';
import OneItemScreen from '../screens/OneItemScreen';
import AccountScreen from '../screens/AccountScreen';
import ShopAccountScreen from '../screens/ShopAccountScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomePage" component={BottomTabNavigator} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp"  component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="OneItem" component={OneItemScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="ShopAccount" component={ShopAccountScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}