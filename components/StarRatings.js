import React from 'react';
import { View, Text } from 'react-native';

const StarRating = ({ rating }) => {
  const maxRating = 5;
  const starIcons = [];
  const integerRating = Math.floor(rating); // Extract the integer part of the rating
  const decimalRating = rating - integerRating; // Extract the decimal part of the rating

  for (let i = 1; i <= maxRating; i++) {
    if (i <= integerRating) {
      // Render filled star for integer part
      starIcons.push(
        <Text key={i} style={{ color: 'yellow' }}>
          ⭐
        </Text>
      );
    } else if (i === integerRating + 1 && decimalRating >= 0.5) {
      // Render half star for decimal rating >= 0.5
      starIcons.push(
        <Text key={i} style={{ color: 'yellow' }}>
          ⭐
        </Text>
      );
    } else {
      // Render empty star for remaining stars
      starIcons.push(
        <Text key={i} style={{ color: 'gray' }}>
          ☆
        </Text>
      );
    }
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {starIcons}
    </View>
  );
};

export default StarRating;
