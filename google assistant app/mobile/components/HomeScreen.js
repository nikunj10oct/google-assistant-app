import React from 'react';
import { View, Button, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Real-Time Assistant Home</Text>
      <Button title="News Headlines" onPress={() => navigation.navigate('News')} />
      <Button title="Set Alarm" onPress={() => navigation.navigate('Alarm')} />
      <Button title="Play Music" onPress={() => navigation.navigate('Music')} />
      <Button title="WhatsApp Feature" onPress={() => navigation.navigate('WhatsApp')} />
      <Button title="Biometric Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}