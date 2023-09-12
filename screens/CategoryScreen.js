
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground,FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'

const Logo = require('../assets/images/Logo.png');
const backgroundImage = require('../assets/images/regBackground.png');
const Fruits = require('../assets/images/fruitCat.png');
const Vegitables = require('../assets/images/vegCat.png');
const Grains = require('../assets/images/grainCat.png');
const Fertilizers = require('../assets/images/fertiCat.png');
const Equipments = require('../assets/images/eqCat.png');
const Product_1 = require('../assets/images/product_1.jpg');
const Product_1_1 = require('../assets/images/product_1_1.jpg');


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
        <Text 
            className="text-[#205526] text-2xl font-semibold text-center m-4">
            Categories
        </Text> 
        
        <ScrollView style={{ flex: 1, backgroundColor: themeColors.bg }}>
        <SafeAreaView style={{ flex: 1 }}>
        <View className="form space-y-2 justify-center items-center">
        <TouchableOpacity className="py-3 bg-white w-64 rounded-xl">
            <View  className="flex-row justify-center">
              <Image source={Fruits} 
              style={{width: 150, height: 150}} />
            </View>
              <Text className="font-xl font-bold text-center text-black">
                  Fruits
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-3 bg-white w-64 rounded-xl">
            <View  className="flex-row justify-center">
              <Image source={Vegitables} 
              style={{width: 150, height: 150}} />
            </View>
              <Text className="font-xl font-bold text-center text-black">
                  Vegitables
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-3 bg-white w-64 rounded-xl">
            <View  className="flex-row justify-center">
              <Image source={Grains} 
              style={{width: 150, height: 150}} />
            </View>
              <Text className="font-xl font-bold text-center text-black">
                  Grains
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-3 bg-white w-64 rounded-xl">
            <View  className="flex-row justify-center">
              <Image source={Fertilizers} 
              style={{width: 150, height: 150}} />
            </View>
              <Text className="font-xl font-bold text-center text-black">
                  Fertilizers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-3 bg-white w-64 rounded-xl">
            <View  className="flex-row justify-center">
              <Image source={Equipments} 
              style={{width: 150, height: 150}} />
            </View>
              <Text className="font-xl font-bold text-center text-black">
                  Equipments
              </Text>
            </TouchableOpacity>           
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


