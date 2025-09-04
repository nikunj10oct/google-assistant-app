import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import NewsSection from './components/NewsSection';
import AlarmScreen from './components/AlarmScreen';
import MusicScreen from './components/MusicScreen';
import WhatsAppFeature from './components/WhatsAppFeature';
import BiometricLogin from './components/BiometricLogin';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="News" component={NewsSection} />
        <Stack.Screen name="Alarm" component={AlarmScreen} />
        <Stack.Screen name="Music" component={MusicScreen} />
        <Stack.Screen name="WhatsApp" component={WhatsAppFeature} />
        <Stack.Screen name="Login" component={BiometricLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}