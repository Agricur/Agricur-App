import { View, Text, TouchableOpacity, ImageBackground, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';


const backgroundImage = require('../assets/images/Signup.jpg');
const Shop1 = require('../assets/images/ShopA.png');
const Shop2 = require('../assets/images/ShopB.png');
const Shop3 = require('../assets/images/ShopC.png');
const Shop4 = require('../assets/images/ShopD.png');
const Shop5 = require('../assets/images/ShopE.png');
const Shop6 = require('../assets/images/ShopF.png');

const chatData = [
  {
    id: '1',
    recipient: 'Recipient 1',
    lastMessage: 'Hello there!',
    timestamp: '2023-07-01 11:50',
    image: Shop1,
  },
  {
    id: '2',
    recipient: 'Recipient 2',
    lastMessage: 'How are you?',
    timestamp: '2023-08-01 14:30',
    image: Shop2,
  },
  {
    id: '3',
    recipient: 'Recipient 3',
    lastMessage: 'What\'s up?',
    timestamp: '2023-09-01 13:30',
    image: Shop3,
  },
  {
    id: '4',
    recipient: 'Recipient 4',
    lastMessage: 'Good to see you!',
    timestamp: '2023-09-10 08:05',
    image: Shop4,
  },
  {
    id: '5',
    recipient: 'Recipient 5',
    lastMessage: 'Is this available?',
    timestamp: '2023-09-12 18:30',
    image: Shop5,
  },
  {
    id: '6',
    recipient: 'Recipient 6',
    lastMessage: 'How much?',
    timestamp: '2023-09-19 08:45',
    image: Shop6,
  },
  {
    id: '7',
    recipient: 'Recipient 7',
    lastMessage: 'Good to see you!',
    timestamp: '2023-09-10 08:05',
    image: Shop4,
  },
  {
    id: '8',
    recipient: 'Recipient 8',
    lastMessage: 'Is this available?',
    timestamp: '2023-09-12 18:30',
    image: Shop5,
  },
  {
    id: '9',
    recipient: 'Recipient 9',
    lastMessage: 'How much?',
    timestamp: '2023-09-19 08:45',
    image: Shop6,
  },
  {
    id: '10',
    recipient: 'Recipient 10',
    lastMessage: 'How much?',
    timestamp: '2022-09-19 08:45',
    image: Shop6,
  },

  
];

chatData.sort((a, b) => {
  const timeA = new Date(a.timestamp);
  const timeB = new Date(b.timestamp);
  return timeB - timeA;
});

const MessageScreen = ( { navigation }) => {
  const renderItem = ({ item }) => (

    <TouchableOpacity onPress={() => navigation.navigate('Chat',{item: item})}>
    <View className="flex-row items-center justify-between rounded-lg m-0.5 p-4 border-b border-[#3da749]  bg-[#d3f3be]">
      <Image source={item.image } style={styles.image} />
      <View style={styles.chatContent}>
        <Text className="text-lg font-bold">{item.recipient}</Text>
        <Text className="text-[#383a38]">{item.lastMessage}</Text>
      </View>
      <Text className="text-xs">{item.timestamp}</Text>
    </View>
    </TouchableOpacity>
  );

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
            <Text className="text-center text-2xl mb-4 font-bold">Conversations</Text>
          </SafeAreaView> 
            <FlatList
              data={chatData}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            />
              
        </View>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  chatContent: {
    flex: 1,
    marginLeft: 16,
  },



});
export default MessageScreen