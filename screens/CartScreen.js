import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet,ScrollView } from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native'

const CartScreen = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Product 1', price: 10, image: require('../assets/images/product_1.jpg'), quantity: 1 },
    { id: '2', name: 'Product 2', price: 15, image: require('../assets/images/product_1_1.jpg'), quantity: 1 },
    { id: '1', name: 'Product 1', price: 10, image: require('../assets/images/product_1.jpg'), quantity: 1 },
    { id: '2', name: 'Product 2', price: 15, image: require('../assets/images/product_1_1.jpg'), quantity: 1 },
     
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const increaseQuantity = (item) => {
    const updatedCart = [...cartItems];
    const index = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
    updatedCart[index].quantity++;
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (item) => {
    const updatedCart = [...cartItems];
    const index = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
      setCartItems(updatedCart);
    }
  };

  const removeItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} className="w-24 h-24 m-4" />
      <View style={styles.itemDetails}>
        <Text className="text-xl font-bold">{item.name}</Text>
        <Text className="text-gray-500">LKR  {(item.price * item.quantity).toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decreaseQuantity(item)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => increaseQuantity(item)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => removeItem(item)} style={styles.removeButton}>
        <Text className="text-white font-bold">Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    
    <SafeAreaView>
      <View className="flex-row ">
        <TouchableOpacity 
          onPress={()=> navigation.goBack()}
          className="bg-[#3da749] p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
          <ArrowLeftIcon size="20" color="black" />
        </TouchableOpacity>
      </View> 

      <View className="items-center justify-center">
        <Text className="text-center text-2xl font-bold mt-2">Shopping Cart</Text>
      </View>
      <ScrollView>
      <SafeAreaView>
      <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.totalContainer}>
        <Text className="font-bold text-xl">Total:  LKR  {calculateTotal().toFixed(2)}</Text>
         <View>
         <TouchableOpacity className="py-2 w-48 bg-[#3da749] rounded-xl">
                <Text className="font-bold text-center text-white">
                     Proceed to {'\n'}Checkout
                 </Text>
           </TouchableOpacity>
         </View>
      </View>
    </View>
          </SafeAreaView>
          </ScrollView>
        


     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  itemDetails: {
    flex: 1,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  quantityButton: {
    backgroundColor: '#3da749',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  quantityButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
  },
  removeButton: {
    backgroundColor: '#f33737',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },

});

export default CartScreen;
