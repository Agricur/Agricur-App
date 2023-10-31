import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import StarRating from "../components/StarRatings";
import {server} from "../server";
import PageHeader from "../components/PageHeader";

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

const categories = [
  { id: "1", name: "Fruits", image: Fruits, route: "FruitScreen" },
  {
    id: "2",
    name: "Vegetables",
    image: Vegetables,
    route: "VegScreen",
  },
  { id: "3", name: "Grains", image: Grains, route: "GrainScreen" },
  {
    id: "4",
    name: "Fertilizers",
    image: Fertilizers,
    route: "FertScreen",
  },
  { id: "5", name: "Equipments", image: Equipments, route: "EquipScreen" },
];

export default function HomeScreen({ route, navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiURL = `${server}/api/product/getAllProducts`;

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
            <PageHeader />
          </SafeAreaView>

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
                        navigations.navigate(category.route);
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
                      key={product.product_id}
                      style={styles.productItem}
                      onPress={() => navigations.navigate("OneItem", { productID : product.product_id })}
                    >
                      <Image
                        source={{ uri: `${server}/${product.image}` }}
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
            </SafeAreaView>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}
