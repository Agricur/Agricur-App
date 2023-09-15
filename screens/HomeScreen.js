import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import Icon from "react-native-vector-icons/FontAwesome5";

const Logo = require("../assets/images/Logo.png");
const backgroundImage = require("../assets/images/regBackground.png");
const Fruits = require("../assets/images/fruitCat.png");
const Vegetables = require("../assets/images/vegCat.png");
const Grains = require("../assets/images/grainCat.png");
const Fertilizers = require("../assets/images/fertiCat.png");
const Equipments = require("../assets/images/eqCat.png");
const Product_1 = require("../assets/images/product_1.jpg");
const Product_1_1 = require("../assets/images/product_1_1.jpg");

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
    marginBottom: 20
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

const categories = [
  { id: "1", name: "Fruits", image: Fruits },
  {
    id: "2",
    name: "Vegetables",
    image: Vegetables
  },
  { id: "3", name: "Grains", image: Grains},
  {
    id: "4",
    name: "Fertilizers",
    image: Fertilizers
  },
  { id: "5", name: "Equipments", image: Equipments },
];

const products = [
  { id: "1", name: "Passion Fruit", image: Product_1 },
  { id: "2", name: "Passion Fruit", image: Product_1_1 },
  { id: "3", name: "Passion Fruit", image: Product_1_1 },
  { id: "4", name: "Passion Fruit", image: Product_1 },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={backgroundImage}
      style={{ flex: 1, backgroundColor: themeColors.bg }}
    >
      <View
        className="flex-1 bg-white"
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
            <View className="flex-row justify-start">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="bg-[#3da749] p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
              >
                <ArrowLeftIcon size="20" color="black" />
                  
              </TouchableOpacity>
            </View>
          </SafeAreaView>

          <View className="flex-row items-center justify-center">
            <View className="flex-1 ">
              <Image source={Logo} className="ml-20 w-16 h-16" />
            </View>
            <View className="flex-1">
              <Text className="font-bold text-sm italic text-[#205526]  mb-2 ">
                Your Trusted Partner in Agriculture Excellence
              </Text>
              <TouchableOpacity className="bg-[#3da749] w-20 h-16 items-center justify-center m-2 rounded-md">
                <Icon name="store" size={24} color="white" />
                <Text style={styles.buttonText}>Shops</Text>
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView
            style={{
              flex: 1,
              backgroundColor: themeColors.bg,
              marginBottom: 30,
            }}
          >
            <SafeAreaView style={{ flex: 1 }}>
              <View style={styles.categoryContainer}>
                <Text className="text-2xl font-bold tracking-tight text-center my-1 text-[#205526]">
                  Product Categories
                </Text>

                <View style={styles.categoryGrid}>
                  {categories.map((category) => (
                    <TouchableOpacity
                      key={category.id}
                      style={styles.categoryItem}
                      onPress={() => {
                        // Handle category click here, e.g., navigate to category page
                        navigation.navigate("Category", {
                          categoryName: category.name,
                        });
                      }}
                    >
                      <Image
                        source={category.image}
                        style={styles.categoryImage}
                      />
                      <Text style={styles.categoryName}>{category.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <View style={styles.productContainer}>
                <Text className="text-2xl font-bold tracking-tight text-center m-4 text-[#205526]">
                  All Products
                </Text>

                <View style={styles.productGrid}>
                  {products.map((product) => (
                    <TouchableOpacity
                      key={product.id}
                      style={styles.productItem}
                      onPress={() => navigation.navigate("OneItem")}
                    >
                      <Image
                        source={product.image}
                        style={styles.productImage}
                      />
                      <Text style={styles.productName}>{product.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </SafeAreaView>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}
