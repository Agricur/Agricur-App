import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';

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

  const DropDown = () => {
    const [value, setValue] = useState(null);

    return (
        
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={districts}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select District"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}

      />
    );
  };

  export default DropDown;

  const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });