import React, { useState } from 'react';
import { themeColors } from '../theme'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('../assets/images/Signup.jpg');

const AccountEditScreen = () => {
const navigation = useNavigation();
  const [editMode, setEditMode] = useState(false);
  const [userDetails, setUserDetails] = useState({
    
    FirstName: 'John',
    lastName: 'Doe',
    Email: 'user@example.com',
    houseNo: '123',
    street: 'Main Street',
    addressCity: 'City',

  });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // Implement logic to save updated user details to backend
   
    setEditMode(false);
  };

  const handleInputChange = (field, value) => {
    setUserDetails({ ...userDetails, [field]: value });
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
    <SafeAreaView style={styles.container}>
    <View className="flex-row ">
        <TouchableOpacity 
          onPress={()=> navigation.goBack()}
          className="bg-[#3da749] p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
          <ArrowLeftIcon size="20" color="black" />
        </TouchableOpacity>
    </View> 
    <Text className="text-center text-2xl mb-4 font-bold">Account Details</Text>
          
      {Object.keys(userDetails).map((field) => (
        <View key={field} style={styles.fieldContainer}>
          <Text style={styles.label}>{field}</Text>
          {editMode ? (
            <TextInput
              style={styles.input}
              value={userDetails[field]}
              onChangeText={(text) => handleInputChange(field, text)}
            />
          ) : (
            <Text style={styles.value}>{userDetails[field]}</Text>
          )}
          {editMode && (
            <TouchableOpacity onPress={handleSave}>
              <Text style={styles.saveButton}>Save</Text>
            </TouchableOpacity>
          )}
          {!editMode && (
            <TouchableOpacity onPress={handleEdit}>
              <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    <View>

    </View>

    </SafeAreaView>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    marginRight: 10,
  },
  input: {
    flex: 2,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  value: {
    flex: 2,
    height: 40,
    paddingHorizontal: 8,
  },
  editButton: {
    flex: 1,
    height: 40,
    color: 'blue',
    textAlign: 'center',
  },
  saveButton: {
    flex: 1,
    height: 40,
    color: 'green',
    textAlign: 'center',
  },
});

export default AccountEditScreen;
