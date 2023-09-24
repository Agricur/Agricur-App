import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const backgroundImage = require('../assets/images/Signup.jpg');

const MyOrdersScreen = () => {
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


<ScrollView>
      <View className="bg-white-600 text-black text-center m-2">
            <View className="mb-2 bg-[#badfa2] font-bold p-4 border-white placeholder:rounded-md">  
                <Text className="text-lg font-bold">Order A</Text>
                <View style={styles.flexContainer}>
  <View style={styles.flex1}>
    <Text>01</Text>
  </View>
  <View style={styles.contents}>
    <View style={styles.flex1}>
      <Text>02</Text>
    </View>

    <View style={styles.flex1}>
      <Text>03</Text>
    </View>
  </View>
  <View style={styles.flex1}>
    <Text>04</Text>
  </View>
</View>
            </View>

            <View className="mb-2 bg-[#badfa2] font-bold p-4 border-white placeholder:rounded-md">  
                <Text className="text-lg font-bold">Order B</Text>
            </View>

            <View className="mb-2 bg-[#badfa2] font-bold p-4 border-white placeholder:rounded-md">  
                <Text className="text-lg font-bold">Order A</Text>
            </View>

            <View className="mb-2 bg-[#badfa2] font-bold p-4 border-white placeholder:rounded-md">  
                <Text className="text-lg font-bold">Order B</Text>
            </View>    
            <View className="mb-2 bg-[#badfa2] font-bold p-4 border-white placeholder:rounded-md">  
                <Text className="text-lg font-bold">Order A</Text>
            </View>

            <View className="mb-2 bg-[#badfa2] font-bold p-4 border-white placeholder:rounded-md">  
                <Text className="text-lg font-bold">Order B</Text>
            </View>
            
            <View className="mb-2 bg-[#badfa2] font-bold p-4 border-white placeholder:rounded-md">  
                <Text className="text-lg font-bold">Order A</Text>
            </View>

            <View className="mb-2 bg-[#badfa2] font-bold p-4 border-white placeholder:rounded-md">  
                <Text className="text-lg font-bold">Order B</Text>
            </View>                     
            <View className="mb-2 bg-[#badfa2] font-bold p-4 border-white placeholder:rounded-md">  
                <Text className="text-lg font-bold">Order A</Text>
            </View>


            <View className="mb-2 bg-[#badfa2] font-bold p-4 border-white placeholder:rounded-md">  
                <Text className="text-lg font-bold">Order Last</Text>
            </View>       
      </View>
      <View className=" m-12 ">
      </View> 
</ScrollView>
    

    </SafeAreaView>
    </View>
    </ImageBackground>
  )
}

export default MyOrdersScreen


const styles = StyleSheet.create({
    flexContainer: {
      flexDirection: 'row',
      // Add any other container styles you need
    },
    flex1: {
      flex: 1,
      // Add any other styles for flex-1 here
    },
    contents: {
      // Add any styles for the contents div here
    },
    // Add styles for other divs as needed
  });
  