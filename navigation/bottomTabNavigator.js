import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import CategoryScreen from "../screens/CategoryScreen";
import AccountScreen from "../screens/AccountScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import ShopsScreen from "../screens/ShopsScreen";

const TabStack = createBottomTabNavigator();

const BottomTabNavigator = ({route, navigation}) => {

  const user_id  = route.params.user_id;

  return (
    <TabStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ black, focused }) => {
          let iconName;

          if (route.name == "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name == "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name == "Categories") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name == "Shops") {
            iconName = focused ? "business" : "business-outline";
          } else if (route.name == "Account") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Icon name={iconName} size={24} color={black} />;
        },
      })}
    >
      <TabStack.Screen name="Home" initialParams={{user_id: user_id}} component={HomeScreen} />
      <TabStack.Screen name="Shops" initialParams={{user_id: user_id}} component={ShopsScreen} />
      <TabStack.Screen name="Categories" initialParams={{user_id: user_id}} component={CategoryScreen} />
      <TabStack.Screen name="Cart" initialParams={{user_id: user_id}} component={CartScreen} />
      <TabStack.Screen name="Account" initialParams={{user_id: user_id}} component={AccountScreen} />
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