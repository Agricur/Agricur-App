
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import {server} from  "../server";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
const Logo = require("../assets/images/Logo.png");

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const res = await fetch(`${server}/api/user/user-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.status === 201) {
        const data = await res.json();
        const user_id = data.user_id;
        navigation.navigate("HomePage", { user_id: user_id });
      } else {
        Alert.alert("Error", "Invalid email or password");
      }
    } catch (err) {
      Alert.alert("Error", err.message);
    }
  };

  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex ">
        <View className="flex-row justify-start mt-8">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-[#3da749] p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        
        <View className="flex-row justify-center">
          <Image source={Logo} style={{ width: 200, height: 200 }} />
        </View>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-8 pt-8"
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="Email"
            autoComplete="email"
            required
            value={email}
            onChangeText={(text) => setEmail(text.toLowerCase())}
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity className="flex items-end">
            <Text className="text-[#3da749] mb-5">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-3 bg-[#3da749] rounded-xl"
            onPress={() => handleLogin()}
            // onPress={() => navigation.navigate("HomePage")}
          >
            <Text className="text-xl font-bold text-center text-white">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className=" font-semibold">Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text className="font-semibold text-[#3da749]"> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
