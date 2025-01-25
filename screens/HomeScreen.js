import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const product = {
  image: 'https://i.pinimg.com/736x/2c/60/02/2c6002b5f11e735f019bdaa040b0892d.jpg',
  description: 'Peruvian Brazilian Hair, 100% Virgin Hair "30" Inch',
  price: 'R2999.99',
};

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Price: {product.price}</Text>
      <Button
        title="Go to Payment"
        onPress={() => navigation.navigate('Payment', { product })}
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
});