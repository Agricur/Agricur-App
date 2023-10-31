import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageHeader from "../components/PageHeader";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";

const Logo = require("../assets/images/Logo.png");
const backgroundImage = require("../assets/images/regBackground.png");
const Fruits = require("../assets/images/fruitCat.png");
const Vegetables = require("../assets/images/vegCat.png");
const Grains = require("../assets/images/grainCat.png");
const Fertilizers = require("../assets/images/fertiCat.png");
const Equipments = require("../assets/images/eqCat.png");

const styles = StyleSheet.create({
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

const CategoryScreen = () => {
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
            <PageHeader />
          </SafeAreaView>

          <View className="mt-2">
            <Text className="text-2xl font-bold tracking-tight text-center my-1 text-[#205526]">
              Categories
            </Text>
          </View>

          <ScrollView style={{ flex: 1, backgroundColor: themeColors.bg }}>
            <SafeAreaView style={{ flex: 1 }}>
              <View style={styles.categoryContainer}>
                <View style={styles.categoryGrid}>
                  {categories.map((category) => (
                    <TouchableOpacity
                      key={category.id}
                      style={styles.categoryItem}
                      onPress={() => {
                        navigation.navigate(category.route);
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
            </SafeAreaView>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CategoryScreen;
