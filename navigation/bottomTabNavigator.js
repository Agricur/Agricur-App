import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import CategoryScreen from "../screens/CategoryScreen";
import AccountScreen from "../screens/AccountScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";

const TabStack = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <TabStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ black, size, focused }) => {
          let iconName;

          if (route.name == "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name == "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name == "Categories") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name == "Account") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Icon name={iconName} size={24} color={black} />;
        },
      })}
    >
      <TabStack.Screen name="Home" component={HomeScreen} />
      <TabStack.Screen name="Cart" component={CartScreen} />
      <TabStack.Screen name="Categories" component={CategoryScreen} />
      <TabStack.Screen name="Account" component={AccountScreen} />
    </TabStack.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
    tabBarStyle: {
      position: 'absolute',
      backgroundColor: 'white',
      height: 50,
      borderTopWidth: 1,
      borderTopColor: 'lightgray',
    },
  });