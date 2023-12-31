import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { server } from '../server';


const backgroundImage = require('../assets/images/Signup.jpg');

const AccountScreen = ({route}) => {

  const navigation = useNavigation();
  const [buyerData, setBuyerData] = useState({
    buyerName: "Buyer Name",
    buyerEmail: "Buyer Email",
    profilePhoto: null,
  });

  const userID = 113;

  useEffect(() => {
    const apiURL = `${server}/api/user/getInfo/${userID}`;

    fetch(apiURL, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      setBuyerData({
        ...buyerData,
        buyerName: data.first_name,
        buyerEmail: data.email,
        profilePhoto: data.profile_photo,
      });
    })
  }, []);

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
      <View className="flex-row mt-12 ">
        <TouchableOpacity 
          onPress={()=> navigation.goBack()}
          className="bg-[#3da749] p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
          <ArrowLeftIcon size="20" color="black" />
        </TouchableOpacity>
      </View>        
      <View className="bg-white-600 text-black text-center justify-center items-center">
          <Text className="text-center text-2xl font-bold">Account Information</Text>
          <View className="rounded-full">
            <Image source={{ uri: `${server}/${buyerData.profilePhoto}`}} className = "w-36 h-36 m-5" />
            <Text className="text-xl text-center font-semibold ">{buyerData.buyerName}</Text>
            <Text className="text-gray-600 text-center text-sm mt-1 mb-4">{buyerData.buyerEmail}</Text>
          </View>
      <View className="mb-2">
      <TouchableOpacity
        className="bg-[#badfa2] font-bold p-4 border-white placeholder:rounded-md w-60 items-center hover:bg-[#c4e660] "
        onPress={() => navigation.navigate('AccountEdit') }>
        <Text className="text-lg font-bold">Edit Profile</Text>
      </TouchableOpacity>
      </View>
      
      <View className="mb-2">    
      <TouchableOpacity
        className="bg-[#badfa2] font-bold p-4 rounded-md w-60 items-center hover:bg-[#c4e660]"
        onPress={() => navigation.navigate('MyOrders') }>
        <Text className="text-lg font-bold">My Orders</Text>
      </TouchableOpacity>
      </View>  
      <View className="mb-2">
      <TouchableOpacity
        className="bg-[#badfa2] font-bold p-4 rounded-md w-60 items-center hover:bg-[#c4e660]"
        onPress={() => navigation.navigate('Message') }>
        <Text className=" text-lg font-bold">Messages</Text>
      </TouchableOpacity>
      </View>  
      <View className="mb-2">
      <TouchableOpacity
        className="bg-[#badfa2] font-bold p-4 rounded-md w-60 items-center hover:bg-[#c4e660]"
        onPress={() => navigation.navigate('OrderHistory') }>
        <Text className="text-lg font-bold">Shopping History</Text>
      </TouchableOpacity>
      </View>
      <View className="mb-2">
      <TouchableOpacity
        className="bg-[#badfa2] font-bold p-4 rounded-md w-60 items-center hover:bg-[#c4e660]"
        onPress={() => navigation.navigate('Welcome') }>
        <Text className="text-[#f33737] text-lg font-bold">Log out</Text>
      </TouchableOpacity>
      </View>  
   

      </View>
    </SafeAreaView>
    </View>
    </ImageBackground>
  )
}

export default AccountScreen