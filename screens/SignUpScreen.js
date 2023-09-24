import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, ImageBackground,Button,StyleSheet  } from 'react-native'
import React, { useState } from 'react';
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
const backgroundImage = require('../assets/images/Signup.jpg');
const Logo = require('../assets/images/Logo.png');


const districts = [
    { label: 'Colombo', value: 'Colombo' },
    { label: 'Gampaha', value: 'Gampaha' },
    { label: 'Kalutara', value: 'Kalutara' },
    { label: 'Kandy', value: 'Kandy' },
    { label: 'Matale', value: 'Matale' },
    { label: 'Nuwara Eliya', value: 'Nuwara Eliya' },
    { label: 'Galle', value: 'Galle' },
    { label: 'Matara', value: 'Matara' },
    { label: 'Hambantota', value: 'Hambantota' },
    { label: 'Jaffna', value: 'Jaffna' },
    { label: 'Kilinochchi', value: 'Kilinochchi' },
    { label: 'Mannar', value: 'Mannar' },
    { label: 'Vavuniya', value: 'Vavuniya' },
    { label: 'Mullaitivu', value: 'Mullaitivu' },
    { label: 'Batticaloa', value: 'Batticaloa' },
    { label: 'Ampara', value: 'Ampara' },
    { label: 'Trincomalee', value: 'Trincomalee' },
    { label: 'Kurunegala', value: 'Kurunegala' },
    { label: 'Puttalam', value: 'Puttalam' },
    { label: 'Anuradhapura', value: 'Anuradhapura' },
    { label: 'Polonnaruwa', value: 'Polonnaruwa' },
    { label: 'Badulla', value: 'Badulla' },
    { label: 'Moneragala', value: 'Moneragala' },
    { label: 'Ratnapura', value: 'Ratnapura' },
    { label: 'Kegalle', value: 'Kegalle' },
  ];


export default function SignUpScreen() {
    const navigation = useNavigation();
    const [value, setValue] = useState(null);
    const goBack = () => {
        navigation.navigate(DropDown);
      };
  return (
    <ImageBackground
    source={backgroundImage}
    style={{ flex: 1, backgroundColor: themeColors.bg }}
  >
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-[#3da749] p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            >
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
        
        <Text 
            className="text-black font-bold text-3xl text-center m-4">
            Sign up to Agricur
        </Text>
        </SafeAreaView>
        <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50,backgroundColor: 'rgba(255, 255, 255, 0.75)'}}
      >
        <View className="flex-row  justify-center">   
            <Image source={Logo}
                    style={{width: 100, height: 100}} />
        </View>
        <Text 
            className="text-black text-lg font-semibold text-center m-4">
            Please enter your details below
        </Text>

        <ScrollView style={{ flex: 1, backgroundColor: themeColors.bg }}>
        <SafeAreaView style={{ flex: 1 }}>
        <View className="form space-y-2">
            <Text className="font-semibold ml-4">First Name</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value="First Name"
                placeholder='Enter Name'
            />
            <Text className="font-semibold  ml-4">Second Name</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value="Second Name"
                placeholder='Enter Name'
            />
            <Text className="font-semibold  ml-4">Email</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value="Email"
                placeholder='Enter Email'
            />
            <Text className="font-semibold ml-4">Address</Text>
            <Text className="text-gray-700 font-semibold  ml-4">House Number</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value="House Number"
                placeholder='Enter House Number'
            />
            
            <Text className="text-gray-700 font-semibold ml-4">Street</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value="Street"
                placeholder='Enter Street'
            />
            <Text className="text-gray-700 font-semibold ml-4">City</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value="City"
                placeholder='Enter City'
            />
            <Text className="text-gray-700 font-semibold ml-4">Select District</Text>
            <Dropdown
                    className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                    selectedTextStyle={styles.selectedTextStyle}
                    data={districts}
                    maxHeight={400}
                    labelField="label"
                    valueField="value"
                    placeholder="Select District"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={item => {
                    setValue(item.value);
                    }}
                    

                />
 
            
            <Text className="font-semibold  ml-4">Phone Number</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value="Phone Number"
                placeholder='Enter Phone Number'
            />
            <Text className="font-semibold  ml-4">Password</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                secureTextEntry
                value="test12345"
                placeholder='Enter Password'
            />
            <Text className="font-semibold ml-4">Re-Enter Password</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                secureTextEntry
                value="test12345"
                placeholder='Enter Password'
            />
            <TouchableOpacity className="py-3 bg-[#3da749] rounded-xl">
                <Text className="font-xl font-bold text-center text-white">
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
        </ScrollView>
        <Text className="text-xl text-gray-700 font-bold text-center  md-4">
            Or
        </Text>
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
const styles = StyleSheet.create({
    selectedTextStyle: {
      fontSize: 14,
    },
  });