import React, { useState, useCallback, useEffect } from "react";
import { View, Text, Button, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity } from "react-native";
import { Bubble, GiftedChat, Send } from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { themeColors } from "../theme";

const backgroundImage = require("../assets/images/regBackground.png");

const ChatScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params;
    const Img = item.image;
    const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: item.lastMessage,
        createdAt: item.timestamp,
        user: {
          _id: 2,
          name: "React-Native",
          avatar: Img,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#2e64e5",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{ marginBottom: 5, marginRight: 5 }}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

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
              onPress={() => navigation.goBack()}
              className="bg-[#3da749] p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-8"
            >
              <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
          </View>
          <Text className="text-center text-2xl mb-4 font-bold">
            {item.recipient}
          </Text>
        </SafeAreaView>
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{ _id: 1 }}
          renderBubble={renderBubble}
          alwaysShowSend
          renderSend={renderSend}
          scrollToBottomComponent={scrollToBottomComponent}
        />
      </View>
    </ImageBackground>
  );
};

export default ChatScreen;

