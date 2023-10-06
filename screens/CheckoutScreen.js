import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { themeColors } from "../theme";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const backgroundImage = require("../assets/images/regBackground.png");

const CheckoutScreen = () => {
  const navigation = useNavigation();

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderRadioButton = (option) => {
    return (
      <TouchableOpacity
        key={option.value}
        style={[
          styles.radioButton,
          selectedOption === option.value && styles.selectedRadioButton,
        ]}
        onPress={() => handleOptionSelect(option.value)}
      >
        {selectedOption === option.value && <View style={styles.innerCircle} />}
      </TouchableOpacity>
    );
  };

  const paymentOptions = [
    { value: "cashOnDelivery", label: "Cash On Delivery" },
    { value: "paypal", label: "Pay with PayPal" },
  ];

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
        <SafeAreaView style={styles.safeArea}>
          <View className="flex-row ">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="bg-[#3da749] p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            >
              <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
          </View>

          <View className="flex-col mb-20">
            <Text className="text-2xl font-bold text-center">
              Checkout Details
            </Text>

        <ScrollView className="mt-3">
            <View style={styles.container}>
              <View className="flex">
                <Text className="text-xl font-bold mb-4">Shipping Address</Text>
                <View className="flex">
                  <Text className=" text-lg font-bold">Kamal De Silva</Text>
                  <Text>071 234 5678</Text>
                </View>
                <Text>No: 160,</Text>
                <Text>Kanaththa Road,</Text>
                <Text>Ja-Ela.</Text>
                <Text className="font-bold">District - Gampaha</Text>
              </View>
              <TouchableOpacity className="bg-[#3da749] py-2 px-1.5 rounded-lg">
                <Text className="text-white font-bold">Change</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container3}>
              <Text className="text-2xl font-bold mb-4 ">Choose the Payment Method</Text>
              {paymentOptions.map((option) => (
                <View key={option.value} className="flex-row items-center my-2">
                  {renderRadioButton(option)}
                  <Text className="flex-1 text-lg font-semibold text-black">{option.label}</Text>
                </View>
              ))}
              <Text className="text-base mt-3">
                <Text className="text-green-700 font-bold">Agricur</Text> keeps your
                information and payment safe.
              </Text>
            </View>

            <View style={styles.orderContainer}>
              <Text className="font-bold text-xl mb-2">Your Order</Text>

              <View style={styles.tableContainer}>
                <View style={styles.tableHeader}>
                  <Text style={styles.headerCell}>Product name</Text>
                  <Text style={styles.headerCell}>Unit Price(Rs.)</Text>
                  <Text style={styles.headerCell}>Total Price(Rs.)</Text>
                </View>

                <View style={styles.tableRow}>
                  <Text style={styles.productCell}>Product_1 x1</Text>
                  <Text style={styles.priceCell}>20.00</Text>
                  <Text style={styles.priceCell}>20.00</Text>
                </View>

                <View style={styles.tableRow}>
                  <Text style={styles.productCell}>Product_2 x2</Text>
                  <Text style={styles.priceCell}>30.00</Text>
                  <Text style={styles.priceCell}>60.00</Text>
                </View>

                <View style={styles.tableRow}>
                  <Text style={styles.productCell}>Product_3 x3</Text>
                  <Text style={styles.priceCell}>40.00</Text>
                  <Text style={styles.priceCell}>120.00</Text>
                </View>
              </View>

              <View style={styles.totalRow}>
                <Text style={styles.totalText}>Shipping Cost</Text>
                <Text style={styles.totalText}>Rs. 200</Text>
              </View>

              <View style={styles.totalRow}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalAmount}>Rs. 400</Text>
              </View>

              <TouchableOpacity style={styles.placeOrderButton}>
                <Text style={styles.placeOrderText}>Place Order</Text>
              </TouchableOpacity>
            </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: "white",
    margin: 16,
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "black",
    shadowRadius: 4,
    elevation: 2,
  },
  container2: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: "black",
    shadowRadius: 4,
    elevation: 2,
  },
  orderContainer: {
    backgroundColor: "white",
    margin: 16,
    borderRadius: 8,
    padding: 16,
    justifyContent: "space-between",
    shadowColor: "black",
    shadowRadius: 4,
    elevation: 2,
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#3da749",
    padding: 8,
  },
  headerCell: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  productCell: {
    flex: 1,
    fontSize: 14,
    textAlign: "center",
  },
  priceCell: {
    flex: 1,
    fontSize: 14,
    textAlign: "center",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
  placeOrderButton: {
    backgroundColor: "#3CB44A",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 4,
  },
  placeOrderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  container3: {
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 8,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3da749',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadioButton: {
    borderColor: '#3da749',
    backgroundColor: '#3da749',
  },
  innerCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'white',
  },
});

export default CheckoutScreen;
