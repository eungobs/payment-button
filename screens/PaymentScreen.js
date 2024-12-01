import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert, TextInput, Image, Text } from 'react-native';
import { Paystack } from 'react-native-paystack';

const PAYSTACK_PUBLIC_KEY = 'pk_test_52e1aaefe05121d5386a4a072cce923a1f41b7a1';

export default function PaymentScreen({ route }) {
  const { product } = route.params; // Receive product details from HomeScreen
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [amount, setAmount] = useState(product.price.replace('R', '').replace('.', '')); // Convert ZAR to integer for Paystack (e.g., 2999.99 -> 299999)

  const handlePay = () => {
    if (!email || !cardNumber || !expiryMonth || !expiryYear || !cvc) {
      Alert.alert('Error', 'Please fill in all the details.');
      return;
    }

    Paystack.chargeCard({
      cardNumber,
      expiryMonth,
      expiryYear,
      cvc,
      email,
      amountInKobo: parseInt(amount) * 100, // Convert ZAR to kobo
      publicKey: PAYSTACK_PUBLIC_KEY,
    })
      .then(response => {
        console.log('Payment successful', response);
        Alert.alert('Payment Successful', `Transaction ID: ${response.reference}`);
      })
      .catch(error => {
        console.error('Payment failed', error);
        Alert.alert('Payment Failed', 'There was an error processing your payment.');
      });
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
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Month (MM)"
        value={expiryMonth}
        onChangeText={setExpiryMonth}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Year (YY)"
        value={expiryYear}
        onChangeText={setExpiryYear}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="CVC"
        value={cvc}
        onChangeText={setCvc}
        keyboardType="number-pad"
        secureTextEntry
      />
      <Button title="Pay Now" onPress={handlePay} />
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
