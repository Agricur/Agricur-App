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
import PageHeader from "../components/PageHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import { useState, useEffect } from "react";
import { server } from "../server";


const backgroundImage = require("../assets/images/regBackground.png");
const Shop1 = require("../assets/images/ShopA.png");


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
  shopGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  shopItem: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    overflow: "hidden",
  },
  shopImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  shopName: {
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
const ShopsScreen = () => {

  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    const apiURL = `${server}/api/shop/getAllShops`;

    fetch(apiURL, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setShopData(data.shops);
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

          <Text className="text-2xl font-bold tracking-tight text-center mt-4">
            All Shops
          </Text>

          <ScrollView style={{ flex: 1, backgroundColor: themeColors.bg }}>
            <SafeAreaView style={{ flex: 1 }}>
              <View style={styles.categoryContainer}>
                <View style={styles.categoryGrid}>
                  <View style={styles.shopGrid}>
                    {shopData.map((shop) => (
                      <TouchableOpacity
                        key={shop.shop_id} // Add a unique key here, for example, product.id
                        style={styles.shopItem}
                        onPress={() => navigations.navigate("OneItem")}
                      >
                        <Image
                          source={{
                            uri: `${server}/${shop.image}`,
                          }} // Use the image path from your product data
                          style={styles.shopImage}
                        />
                        <Text style={styles.shopName}>{shop.shop_name}</Text>
                        {/* <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text style={{ marginRight: 5 }}>Ratings:</Text>
                          <StarRating rating={shop.rating} numStars={5} />
                        </View> */}
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </View>
            </SafeAreaView>
            <View className=" m-8 "></View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ShopsScreen;
