import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const Product_1 = require('../assets/images/product_1.jpg');

export default function OneItemScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
       <View className="flex-row ">
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-[#3da749] p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
>
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
    
      <ScrollView>
        
        {/* Box 1: Product Image */}
        <View className="rounded bg-[#FAFAFA]">
        <View className="pt-2 pl-3 pr-3">
          <View className="flex-1 ">
            <Image source={Product_1} className = "w-full h-64" />
          </View>
        </View>
        </View>

        {/* Box 2: Product Info */}
        <View className="mb-8">
        <View className="rounded p-1 bg-[#FAFAFA] mx-2">
        <View className="bg-[#cfd4d0] p-5">
          <Text className="text-2xl font-bold">Passion Fruit</Text>
          <View>
            <Text>Ratings</Text>
          </View>
          <Text className= "">Category : Fruit</Text>
          <Text>Price: Rs. 548/kg</Text>
          <Text>Quantity:</Text>
          <Text className="mb-2 text-lg font-semibold">Description:</Text>
          <Text className="mb-2 text-lg font-semibold">Specification:</Text>
          <Text className="mb-2 text-lg font-semibold">Stock:</Text>
          <TouchableOpacity className="py-3 bg-[#3da749] rounded-3xl">
                <Text className="font-xl font-bold text-center text-white">
                    Add to Cart
                </Text>
            </TouchableOpacity>
         
        </View>
        </View>

        {/* Box 3: Delivery Section */}
        <View className="rounded p-1 bg-[#FAFAFA] mx-2">
        <View className="bg-[#cfd4d0] p-5">
          <Text className="text-xl font-bold mb-2">Delivery</Text>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ flex: 1 }}>Delivery Address</Text>
                <TouchableOpacity>
                  <Text style={{ color: 'blue' }}>Change</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ flex: 1 }}>Estimated Delivery Date</Text>
                <Text style={{ color: 'black' }}>Delivery Cost</Text>
              </View>
              
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ flex: 1 }}>Payment Method</Text>
                <TouchableOpacity>
                  <Text style={{ color: 'blue' }}>Change</Text>
                </TouchableOpacity>
              </View>

          </View>    
        </View>
      

        {/* Box 4: Shop Information */}
        <View className="rounded p-1 bg-[#FAFAFA] mx-2">
        <View className="bg-[#cfd4d0] p-5">
          <Text className="text-xl font-bold mb-2">Shop Name</Text>
          <TouchableOpacity className="py-3 bg-[#3da749] rounded-3xl">
                <Text className="font-xl font-bold text-center text-white ">
                    Visit Store
                </Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}