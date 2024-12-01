import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert, TextInput, Image, Text } from 'react-native';
import axios from 'axios';
import * as WebBrowser from 'expo-web-browser';

const PAYSTACK_SECRET_KEY = 'Sk_test_d61496b4ca2447987b34b3ccb62712fcec399745';
const PAYSTACK_API_URL = 'https://api.paystack.co/transaction/initialize';

export default function PaymentScreen({ route }) {
  const { product } = route.params; // Receive product details from HomeScreen
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(product.price.replace('R', '').replace('.', '')); // Convert ZAR to integer for Paystack (e.g., 2999.99 -> 299999)

  const handlePayment = async () => {
    try {
      // Call Paystack API to initialize a transaction
      const response = await axios.post(
        PAYSTACK_API_URL,
        {
          email,
          amount: parseInt(amount) * 100, // Convert ZAR to kobo
        },
        {
          headers: {
            Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const { authorization_url } = response.data.data;

      // Redirect the user to the payment page
      await WebBrowser.openBrowserAsync(authorization_url);
      Alert.alert('Payment Initiated', 'Follow the link to complete payment.');
    } catch (error) {
      console.error('Payment failed:', error);
      Alert.alert('Payment Failed', 'There was an error processing your payment.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Price: {product.price}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button
        title="Pay Now"
        onPress={handlePayment}
        disabled={!email}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});
