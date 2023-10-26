import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import Logo from "../assets/images/Logo.png";
import { useNavigation } from '@react-navigation/native'

function PageHeader() {

    const navigations = useNavigation();
  return (
    <View className="mt-12">
    <View className="flex-row justify-start">
      <TouchableOpacity
        onPress={() => navigations.goBack()}
        className="bg-[#3da749] p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
      >
        <ArrowLeftIcon size="20" color="black" />
      </TouchableOpacity>
    </View>

    <View className="flex-row items-center justify-center">
      <View className="flex-1 ">
        <Image source={Logo} className="ml-20 w-16 h-16" />
      </View>
      <View className="flex-1">
        <Text className="font-bold text-sm italic text-[#205526]  mb-2 ">
          Your Trusted Partner in Agriculture Excellence
        </Text>
      </View>
    </View>
  </View>
  )
}

export default PageHeader