
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground,FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'

const Logo = require('../assets/images/Logo.png');
const backgroundImage = require('../assets/images/regBackground.png');
const Fruits = require('../assets/images/fruitCat.png');
const Vegetables = require('../assets/images/vegCat.png');
const Grains = require('../assets/images/grainCat.png');
const Fertilizers = require('../assets/images/fertiCat.png');
const Equipments = require('../assets/images/eqCat.png');


const styles = StyleSheet.create({
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

const CategoryScreen = () => {

  const navigation = useNavigation();
  return (
    <ImageBackground
      source={backgroundImage} 
      style={{ flex: 1, backgroundColor: themeColors.bg }}
    >
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>


      <View className="flex-1 bg-white "
        style={{borderTopLeftRadius: 40, borderTopRightRadius: 40,backgroundColor: 'rgba(255, 255, 255, 0.75)'}}
      > 
        <SafeAreaView className="flex">
       
               
        </SafeAreaView>   
        <View className="flex-row items-center justify-center">
          <View className="flex-1 ">
            <Image source={Logo} className = "ml-20 w-16 h-16" />
          </View>
          <View className="flex-1">
            <Text className="font-bold text-sm italic text-[#205526]  mb-2 ">
              Your Trusted Partner in Agriculture Excellence
            </Text>
          </View>
        </View> 
        
        <ScrollView style={{ flex: 1, backgroundColor: themeColors.bg }}>
        <SafeAreaView style={{ flex: 1 }}>

        <View style={styles.categoryContainer}>
                <Text className="text-2xl font-bold tracking-tight text-center my-1 text-[#205526]">
                  Categories
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

        </SafeAreaView>
        </ScrollView>
        <View className="flex-row justify-center m-7 ">
            <Text className=" font-semibold">Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="font-semibold text-[#3da749] "> Login</Text>
            </TouchableOpacity>
        </View> 
      </View>
    </View>
    </ImageBackground>
  )
}

export default CategoryScreen


