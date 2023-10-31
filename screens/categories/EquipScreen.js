import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../../theme'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import StarRating from '../../components/StarRatings'
import { useState, useEffect } from 'react';
import {server} from "../../server";
import PageHeader from "../../components/PageHeader";

const backgroundImage = require("../../assets/images/regBackground.png");

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3da749",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  productItem: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 8,
  },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginVertical: 10,
    marginBottom: 20,
  },
  categoryItem: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    overflow: "hidden",
  },
  categoryImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 8,
  },
});

function EquipScreen() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const apiURL = `${server}/api/product/getEquipments`;
  
      fetch(apiURL, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.products);
        });
    }, []);
  
    const navigations = useNavigation();
    return (
      <ImageBackground
        source={backgroundImage}
        style={{ flex: 1, backgroundColor: themeColors.bg }}
      >
        <View
          className="flex-1 bg-white "
          style={{ backgroundColor: themeColors.bg }}
        >
          <View
            className="flex-1 bg-white "
            style={{
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              backgroundColor: "rgba(255, 255, 255, 0.75)",
            }}
          >
            <SafeAreaView className="flex">
              <PageHeader />
            </SafeAreaView>
  
            <View className="mt-2">
              <Text className="text-2xl font-bold tracking-tight text-center my-1 text-[#205526]">
                Equipments
              </Text>
            </View>
  
            <ScrollView style={{ flex: 1, backgroundColor: themeColors.bg }}>
              <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.categoryContainer}>
                  <View style={styles.categoryGrid}>
                    <View style={styles.productGrid}>
                      {products.map((product) => (
                        <TouchableOpacity
                          key={product.product_id} // Adding a unique key.
                          style={styles.productItem}
                          onPress={() => navigations.navigate("OneItem", { productID : product.product_id })}
                        >
                          <Image
                            source={{
                              uri: `${server}/${product.image}`,
                            }} 
                            style={styles.productImage}
                          />
                          <Text style={styles.productName}>{product.name}</Text>
                          <Text style={styles.productPrice}>
                            Price: LKR {product.price}
                          </Text>
                          <View
                            style={{ flexDirection: "row", alignItems: "center" }}
                          >
                            <Text style={{ marginRight: 5 }}>Ratings:</Text>
                            <StarRating rating={product.rating} numStars={5} />
                          </View>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                </View>
              </SafeAreaView>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    );
}

export default EquipScreen