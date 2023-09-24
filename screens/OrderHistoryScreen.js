import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('../assets/images/Signup.jpg');

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
            <Text>OrderHistoryScreen</Text>
            <View className="flex-row ">
                <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-[#3da749] p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
                <ArrowLeftIcon size="20" color="black" />
                </TouchableOpacity>
            </View>            
        </SafeAreaView>
        </View>
    </ImageBackground>
  )
}

export default OrderHistoryScreen