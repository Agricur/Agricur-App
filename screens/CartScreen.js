
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet,ScrollView } from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native'

const CartScreen = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Product 1",
      price: 10,
      image: require("../assets/images/product_1.jpg"),
      quantity: 1,
    },
    {
      id: "2",
      name: "Product 2",
      price: 15,
      image: require("../assets/images/product_1_1.jpg"),
      quantity: 1,
    },
    {
      id: "3",
      name: "Product 3",
      price: 10,
      image: require("../assets/images/product_1.jpg"),
      quantity: 1,
    },
    {
      id: "4",
      name: "Product 4",
      price: 15,
      image: require("../assets/images/product_1_1.jpg"),
      quantity: 1,
    },
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
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>LKR {(item.price * item.quantity).toFixed(2)}</Text>
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
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (

    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.cartTitle}>Shopping Cart</Text>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: LKR {calculateTotal().toFixed(2)}</Text>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 80,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 30,
    textAlign: 'center',

  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: 'gray',
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
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#3da749',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CartScreen;