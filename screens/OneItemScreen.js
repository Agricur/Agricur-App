import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { server } from '../server';
import StarRating from '../components/StarRatings';

export default function OneItemScreen({ route, navigation }) {
  const productID = route.params.productID;
  const [itemData, setItemData] = useState(null);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const apiURL = `${server}/api/product/getProduct/${productID}`;

    fetch(apiURL, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setItemData(data.product);
      });
  }, [productID]);

  useEffect(() => {

    const apiURL = `${server}/api/product/getRating/${productID}`;

    fetch(apiURL, {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
        setRating(parseFloat(data.rating.rating));
        console.log(data.rating.rating);
      });
  }, []);

  const navigations = useNavigation();

  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => navigations.goBack()}
          style={{
            backgroundColor: '#3da749',
            padding: 8,
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
            marginLeft: 8,
          }}
        >
          <ArrowLeftIcon size={20} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Box 1: Product Image */}
        <View style={{ backgroundColor: '#FAFAFA', borderRadius: 8, margin: 8 }}>
          <Image
            source={{ uri: `${server}/${itemData?.image}` }}
            style={{ width: '100%', height:200, borderRadius: 8 }}
          />
        </View>

        {/* Box 2: Product Info */}
        <View style={{ backgroundColor: '#FAFAFA', borderRadius: 8, margin: 8 }}>
          <View style={{ backgroundColor: '#cfd4d0', padding: 16, borderRadius: 8 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{itemData?.name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>Ratings : </Text>
              <StarRating rating={rating} numStars={5} />
            </View>
            <Text>Category: {itemData?.category}</Text>
            <Text>Price: LKR {itemData?.price}</Text>
            <Text>Quantity: {itemData?.quantity}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#3da749',
                padding: 12,
                borderRadius: 24,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 1,
              }}
            >
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Box 3: Delivery Section */}
        <View style={{ backgroundColor: '#FAFAFA', borderRadius: 8, margin: 8 }}>
          <View style={{ backgroundColor: '#cfd4d0', padding: 16, borderRadius: 8 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Delivery</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1 }}>Delivery Address</Text>
              <TouchableOpacity>
                <Text style={{ color: 'blue' }}>Change</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1 }}>Estimated Delivery Date</Text>
              <Text style={{ color: 'black' }}>Delivery Cost</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1 }}>Payment Method</Text>
              <TouchableOpacity>
                <Text style={{ color: 'blue' }}>Change</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Box 4: Shop Information */}
        <View style={{ backgroundColor: '#FAFAFA', borderRadius: 8, margin: 8}}>
          <View style={{ backgroundColor: '#cfd4d0', padding: 16, borderRadius: 8 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>{itemData?.shop_name}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#3da749',
                padding: 12,
                borderRadius: 24,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Visit Store</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
