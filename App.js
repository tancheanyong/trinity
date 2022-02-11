import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {Button, View, Text,StyleSheet} from 'react-native';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';


const App =()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} options={{
          headerTitle:'Contacts',
        }}/>
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}



export default App;