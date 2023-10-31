import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('../assets/images/Signup.jpg');

const completedOrders = [
  {
    id: '1',
    orderNumber: 'ORD123456',
    date: '2023-09-15',
    status: 'Completed',
    totalAmount: 'Rs. 465',
    productName: 'Product A',
    productImage: require('../assets/images/product_1_1.jpg'),
  },
  {
    id: '2',
    orderNumber: 'ORD123456',
    date: '2023-09-15',
    status: 'Completed',
    totalAmount: 'Rs. 465',
    productName: 'Rs. 465',
    productImage: require('../assets/images/product_1_1.jpg'), 
  },
  {
    id: '3',
    orderNumber: 'ORD123456',
    date: '2023-09-15',
    status: 'Completed',
    totalAmount: 'Rs. 465',
    productName: 'Product A',
    productImage: require('../assets/images/product_1_1.jpg'), 
  },

  {
    id: '4',
    orderNumber: 'ORD123456',
    date: '2023-09-15',
    status: 'Completed',
    totalAmount: 'Rs. 562',
    productName: 'Product A',
    productImage: require('../assets/images/product_1_1.jpg'), 
  },
];


const OrderHistoryScreen = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground
        source={backgroundImage}
        style={{ flex: 1, backgroundColor: themeColors.bg }}
      >
        <View
              className="flex-1 bg-white "
              style={{
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                backgroundColor: "rgba(255, 255, 255, 0.75)",
              }}
            >
        <SafeAreaView>
            <View className="flex-row ">
                <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-[#3da749] p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
                <ArrowLeftIcon size="20" color="black" />
                </TouchableOpacity>
            </View>            
        </SafeAreaView>

        <View className="flex-1 p-2">
          <Text className="text-center text-2xl mb-4 font-bold">Order History</Text>
          <ScrollView>
            {completedOrders.map((order) => (
              <View key={order.id} className=" p-2 bg-[#dde4d8] m-1 rounded-lg">
                <Text className="text-xl font-semibold mb-4">Product Name: {order.productName}</Text>
                <View className="flex-row">
                <Image source={order.productImage} className="w-36 h-36 m-2 rounded-lg" />
                <View className="flex-1 ml-2">
                  <Text className="font-semibold mt-2">Order Number: {order.orderNumber}</Text>
                  <Text className="font-sm">Date: {order.date}</Text>
                  <Text className="font-sm">Status: {order.status}</Text>
                  <Text className="font-semibold  text-lg">Total Amount: {order.totalAmount}</Text>
                  <View className="flex-row">
                    <TouchableOpacity className=" border border-[#eb4e4e] p-1 rounded-lg m-2">
                      <Text className="text-lg font-bold text-center text-[#eb4e4e] " >Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-[#3da749] shadow-lg p-2 rounded-lg">
                      <Text  className="text-lg font-bold text-center text-white">Add to Cart</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                </View>
          </View>
        ))}
      </ScrollView>
    </View>

        </View>
    </ImageBackground>
  )
}

export default OrderHistoryScreen