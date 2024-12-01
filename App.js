import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Correct path to HomeScreen
import PaymentScreen from './screens/PaymentScreen'; // Correct path to PaymentScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home Screen */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
        
        {/* Payment Screen */}
        <Stack.Screen 
          name="Payment" 
          component={PaymentScreen} 
          options={{ title: 'Payment' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
