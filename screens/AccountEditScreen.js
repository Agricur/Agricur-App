import React, { useState } from 'react';
import { themeColors } from '../theme';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('../assets/images/Signup.jpg');

const AccountEditScreen = () => {
  const navigation = useNavigation();
  const [editMode, setEditMode] = useState(false);
  const [userDetails, setUserDetails] = useState({
    'First Name': 'John',
    'Last Name': 'Doe',
    'Email': 'user@example.com',
    'House Number': '123',
    'Street': 'Main Street',
    'City': 'City',
    'District': 'Colombo',
    'Phone Number' : '0771234567',
  });

  // Track the field that is currently being edited
  const [editingField, setEditingField] = useState('');

  const handleEdit = (field) => {
    setEditingField(field);
    setEditMode(true);
  };

  const handleSave = () => {
    // Implement logic to save updated user details to the backend
    setEditMode(false);
    setEditingField('');
  };

  const handleInputChange = (field, value) => {
    setUserDetails({ ...userDetails, [field]: value });
  };

  return (
    <ImageBackground source={backgroundImage} style={{ flex: 1, backgroundColor: themeColors.bg }}>
      <View
        style={{
          flex: 1,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
        }}
      >
         <View className="flex-row ">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="bg-[#3da749] p-2 rounded-tr-2xl mt-8 rounded-bl-2xl ml-4"
            >
              <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
          </View>
        <SafeAreaView style={styles.container}>
         <Text className="text-center text-2xl mb-4 font-bold">Account Details</Text>
          {Object.keys(userDetails).map((field) => (
            <View key={field} style={styles.fieldContainer}>
              <Text style={styles.label}>{field}</Text>
              {editingField === field ? (
                <>
                  <TextInput
                    style={styles.input}
                    value={userDetails[field]}
                    onChangeText={(text) => handleInputChange(field, text)}
                  />
                  <TouchableOpacity onPress={handleSave}>
                    <Text style={styles.saveButton}>Save</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Text style={styles.value}>{userDetails[field]}</Text>
                  <TouchableOpacity onPress={() => handleEdit(field)}>
                    <Text style={styles.editButton}>Edit</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          ))}
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
    marginBottom: 10,
  },
  label: {
    flex: 1,
    marginRight: 10,
    fontWeight: 'bold',
  },
  input: {
    flex: 2,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginRight: 10,
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
