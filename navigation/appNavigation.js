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
import InsideCategoryScreen from '../screens/InsideCategoryScreen';
import ShopsScreen from '../screens/ShopsScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen'; 
import DropDown from './DropDown';
import OrderHistoryScreen from '../screens/OrderHistoryScreen'; 
import AccountEditScreen from '../screens/AccountEditScreen';  
import MessageScreen from '../screens/MessageScreen';
import ChatScreen from '../screens/ChatScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import FruitScreen from '../screens/categories/FruitScreen';
import VegScreen from '../screens/categories/VegScreen';
import FertScreen from '../screens/categories/FertScreen';
import GrainsScreen from '../screens/categories/GrainsScreen';
import EquipScreen from '../screens/categories/EquipScreen';
import CartScreen from '../screens/CartScreen';


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
        <Stack.Screen name="FruitScreen" component={FruitScreen} />
        <Stack.Screen name="VegScreen" component={VegScreen} />
        <Stack.Screen name="FertScreen" component={FertScreen} />
        <Stack.Screen name="GrainScreen" component={GrainsScreen} />
        <Stack.Screen name="EquipScreen" component={EquipScreen} />
        <Stack.Screen name="OneItem" component={OneItemScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="InsideCategory" component={InsideCategoryScreen} />
        <Stack.Screen name="Shops"  component={ShopsScreen} />
        <Stack.Screen name="MyOrders"  component={MyOrdersScreen} />
        <Stack.Screen name="DropDown"  component={DropDown} />
        <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} /> 
        <Stack.Screen name="AccountEdit" component={AccountEditScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}