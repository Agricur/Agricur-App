import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground, StyleSheet  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme'
import Icon from 'react-native-vector-icons/FontAwesome5'; 

const Logo = require('../assets/images/Logo.png');
const backgroundImage = require('../assets/images/regBackground.png');
const Shop1 = require('../assets/images/ShopA.png');
const Shop2 = require('../assets/images/ShopB.png');
const Shop3 = require('../assets/images/ShopC.png');
const Shop4 = require('../assets/images/ShopD.png');
const Shop5 = require('../assets/images/ShopE.png');
const Shop6 = require('../assets/images/ShopF.png');
const Shop7 = require('../assets/images/ShopG.jpg');
const Shop8 = require('../assets/images/ShopH.png');

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
const ShopsScreen = () => {
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
          </View>
        </View>  
        <Text className="text-2xl font-bold tracking-tight text-center mt-4">
            All Shops
        </Text>
        <ScrollView style={{ flex: 1, backgroundColor: themeColors.bg }}>
        <SafeAreaView style={{ flex: 1 }}>
        

        
        <View className="flex flex-row justify-between m-4">
          <View className="flex-1">
          <TouchableOpacity onPress={()=> navigation.navigate('Shops')}>
            <View className="py-3 bg-white w-44 rounded-xl">
              <View  className="flex-row justify-center">
                <Image 
                  source={Shop1} 
                  style={{width: 150, height: 150}} 
                />
              </View>
              <Text className="font-xl font-bold text-center text-black">
                Shop A
              </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-1">
          <TouchableOpacity onPress={()=> navigation.navigate('Shops')}>
            <View className="py-3 bg-white w-44 rounded-xl">
              <View  className="flex-row justify-center">
                <Image 
                  source={Shop2} 
                  style={{width: 150, height: 150}} 
                />
              </View>
              <Text className="font-xl font-bold text-center text-black">
                Shop B
              </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row justify-between m-4">
          <View className="flex-1">
          <TouchableOpacity onPress={()=> navigation.navigate('Shops')}>
            <View className="py-3 bg-white w-44 rounded-xl">
              <View  className="flex-row justify-center">
                <Image 
                  source={Shop3} 
                  style={{width: 150, height: 150}} 
                />
              </View>
              <Text className="font-xl font-bold text-center text-black">
                Shop C
              </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-1">
          <TouchableOpacity onPress={()=> navigation.navigate('Shops')}>
            <View className="py-3 bg-white w-44 rounded-xl">
              <View  className="flex-row justify-center">
                <Image 
                  source={Shop4} 
                  style={{width: 150, height: 150}} 
                />
              </View>
              <Text className="font-xl font-bold text-center text-black">
                Shop D
              </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row justify-between m-4">
          <View className="flex-1">
          <TouchableOpacity onPress={()=> navigation.navigate('Shops')}>
            <View className="py-3 bg-white w-44 rounded-xl">
              <View  className="flex-row justify-center">
                <Image 
                  source={Shop5} 
                  style={{width: 150, height: 150}} 
                />
              </View>
              <Text className="font-xl font-bold text-center text-black">
                Shop E
              </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-1">
          <TouchableOpacity onPress={()=> navigation.navigate('Shops')}>
            <View className="py-3 bg-white w-44 rounded-xl">
              <View  className="flex-row justify-center">
                <Image 
                  source={Shop6} 
                  style={{width: 150, height: 150}} 
                />
              </View>
              <Text className="font-xl font-bold text-center text-black">
                Shop F
              </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row justify-between m-4">
          <View className="flex-1">
          <TouchableOpacity onPress={()=> navigation.navigate('Shops')}>
            <View className="py-3 bg-white w-44 rounded-xl">
              <View  className="flex-row justify-center">
                <Image 
                  source={Shop7} 
                  style={{width: 150, height: 150}} 
                />
              </View>
              <Text className="font-xl font-bold text-center text-black">
                Shop G
              </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-1">
          <TouchableOpacity onPress={()=> navigation.navigate('Shops')}>
            <View className="py-3 bg-white w-44 rounded-xl">
              <View  className="flex-row justify-center">
                <Image 
                  source={Shop8} 
                  style={{width: 150, height: 150}} 
                />
              </View>
              <Text className="font-xl font-bold text-center text-black">
                Shop H
              </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </SafeAreaView>
        <View className=" m-8 ">
        </View> 
        </ScrollView>
      </View>
    </View>
    </ImageBackground>
  )
}

export default ShopsScreen