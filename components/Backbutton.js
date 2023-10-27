import React from "react";
import { View ,TouchableOpacity} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const Backbutton = () => {


    return (
    <View className="flex-row justify-start">
    <TouchableOpacity
      onPress={() => navigations.goBack()}
      className="bg-[#3da749] p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
    >
      <ArrowLeftIcon size="20" color="black" />
    </TouchableOpacity>
  </View>
    );

};



export default Backbutton;
