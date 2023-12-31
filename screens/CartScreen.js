import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { themeColors } from "../theme";
import { server } from "../server";
import { useNavigation } from "@react-navigation/native";



const backgroundImage = require("../assets/images/regBackground.png");

const CartScreen = ({ route, navigation }) => {

  const user_id = route.params.user_id;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const apiURL = `${server}/api/cart/getCartMobile/${user_id}`;

    fetch(apiURL, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data.cartItems);
      });
  }, [cartItems]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const [refresh, setRefresh] = useState(0);

  const increaseQuantity = async (item) => {

    if (refresh < 4) {
      setRefresh(refresh + 1);
    } else {
      navigation.navigate('Cart');
      setRefresh(0);
    }


    const updatedCart = [...cartItems];
    const index = updatedCart.findIndex((cartItem) => cartItem.product_id === item.product_id);
    updatedCart[index].quantity++;
    setCartItems(updatedCart);

    const res = await fetch(`${server}/api/cart/updateCartMobile/113`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: 113, cartItems: updatedCart }),
  })
  };

  const decreaseQuantity = async (item) => {
    
    if (refresh < 4) {
      setRefresh(refresh + 1);
    } else {
      navigation.navigate('Cart');
      setRefresh(0);
    }
    
    const updatedCart = [...cartItems];
    const index = updatedCart.findIndex((cartItem) => cartItem.product_id === item.product_id);
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
      setCartItems(updatedCart);
    }

    const res = await fetch(`${server}/api/cart/updateCartMobile/113`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: 113, cartItems: updatedCart }),
    });
  };

  const removeItem = async (item) => {

    navigation.navigate('Cart');

    const updatedCart = cartItems.filter((cartItem) => cartItem.product_id !== item.product_id);
    setCartItems(updatedCart);

    const res = await fetch(`${server}/api/cart/removeItemsMobile/112`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: 113, cartItems: updatedCart }),
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: `${server}/${item.image}`}} style={styles.itemImage} />
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
    <ImageBackground
    source={backgroundImage}
    style={{ flex: 1, backgroundColor: themeColors.bg }}
  >
    <View
      className="flex-1 bg-white "
      style={{
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: "rgba(255, 255, 255, 0.75)",
      }}
    >
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.cartTitle}>Shopping Cart</Text>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.product_id}
        />
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: LKR {calculateTotal().toFixed(2)}</Text>
          <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate("Checkout")}>
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </View>
    </ImageBackground>
  );
}
;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,

  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 16,
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
    borderRadius: 50,
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
    marginBottom: 50,
    marginTop: 16,
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
