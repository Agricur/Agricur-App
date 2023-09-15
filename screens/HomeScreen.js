import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground,FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'
import Icon from 'react-native-vector-icons/FontAwesome5'; 

const Logo = require('../assets/images/Logo.png');
const backgroundImage = require('../assets/images/regBackground.png');
const Fruits = require('../assets/images/fruitCat.png');
const Vegitables = require('../assets/images/vegCat.png');
const Grains = require('../assets/images/grainCat.png');
const Fertilizers = require('../assets/images/fertiCat.png');
const Equipments = require('../assets/images/eqCat.png');
const Product_1 = require('../assets/images/product_1.jpg');
const Product_1_1 = require('../assets/images/product_1_1.jpg');

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3da749', 
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default function HomeScreen() {
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
        <View className="flex-row justify-start">
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-[#3da749] p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            >
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
               
        </SafeAreaView>   
        <View className="flex-row items-center justify-center">
          <View className="flex-1 ">
            <Image source={Logo} className = "ml-20 w-16 h-16" />
          </View>
          <View className="flex-1">
            <Text className="font-bold text-sm italic text-[#205526]  mb-2 ">
              Your Trusted Partner in Agriculture Excellence
            </Text>
    <TouchableOpacity 
    onPress={()=> navigation.navigate('Shops')} 
    className="bg-[#3da749] w-20 h-16 items-center justify-center m-2 rounded-md">
      <Icon name="store" size={24} color="white" />
      <Text style={styles.buttonText}>Shops</Text>
    </TouchableOpacity>
          </View>
        </View>  
        
        <ScrollView style={{ flex: 1, backgroundColor: themeColors.bg }}>
        <SafeAreaView style={{ flex: 1 }}>
        <View className="form space-y-2 justify-center items-center">
        <TouchableOpacity 
            onPress={()=> navigation.navigate('InsideCategory')}
            className="py-3 bg-white w-64 rounded-xl">
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
        
        <Text className="text-2xl font-bold tracking-tight text-center m-4">
            All Products
        </Text>
        
        <View className="flex flex-row justify-between m-4">
          <View className="flex-1">
          <TouchableOpacity onPress={()=> navigation.navigate('OneItem')}>
            <View className="py-3 bg-white w-44 rounded-xl">
              <View  className="flex-row justify-center">
                <Image 
                  source={Product_1} 
                  style={{width: 100, height: 100}} 
                />
              </View>
              <Text className="font-xl font-bold text-center text-black">
                Passion Fruit
              </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-1">
          <TouchableOpacity onPress={()=> navigation.navigate('OneItem')}>
            <View className="py-3 bg-white w-44 rounded-xl">
              <View  className="flex-row justify-center">
                <Image 
                  source={Product_1_1} 
                  style={{width: 100, height: 100}} 
                />
              </View>
              <Text className="font-xl font-bold text-center text-black">
                Passion Fruit
              </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row justify-between m-4">
          <View className="flex-1">
          <TouchableOpacity onPress={()=> navigation.navigate('OneItem')}>
            <View className="py-3 bg-white w-44 rounded-xl">
              <View  className="flex-row justify-center">
                <Image 
                  source={Product_1_1} 
                  style={{width: 100, height: 100}} 
                />
              </View>
              <Text className="font-xl font-bold text-center text-black">
                Passion Fruit
              </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-1">
          <TouchableOpacity onPress={()=> navigation.navigate('OneItem')}>
            <View className="py-3 bg-white w-44 rounded-xl">
              <View  className="flex-row justify-center">
                <Image 
                  source={Product_1} 
                  style={{width: 100, height: 100}} 
                />
              </View>
              <Text className="font-xl font-bold text-center text-black">
                Passion Fruit
              </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </SafeAreaView>
        </ScrollView>
        <View className=" m-8 ">
        </View> 
      </View>
    </View>
    </ImageBackground>
  )
}
