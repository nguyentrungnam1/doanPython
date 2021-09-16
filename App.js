import React, {Component} from 'react';

import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/mhinhA';
import DetailScreen from './components/mhinhB';
// import { HomeScreen , DetailScreen } from './components/ScreenName';



const Stack = createNativeStackNavigator();


export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name ="Home" component ={HomeScreen}/>
          <Stack.Screen name ="Detail" component ={DetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
        
    );
  }
}