import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const Product_1 = require('../assets/images/product_1.jpg');
const Product_1_1 = require('../assets/images/product_1_1.jpg');

const InsideCategoryScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row ">
        <TouchableOpacity 
          onPress={()=> navigation.goBack()}
          className="bg-[#3da749] p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
          <ArrowLeftIcon size="20" color="black" />
        </TouchableOpacity>
      </View>    
      <Text className="text-2xl font-bold tracking-tight text-center m-4">
            Fruits
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
  )
}

export default InsideCategoryScreen