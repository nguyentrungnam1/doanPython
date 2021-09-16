import React, {Component, useState} from 'react';
import {StatusBar, View, Text, Button, Alert ,StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


export default class HomeScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      sendData : {
        id: 1 , 
        count : 10
      }
    }
  }
  render(){
    const {navigation} = this.props; 
    // let sendData = {
    //   id : 1,
    //   count: 10,
    // }
    return(
      <View>
        <Button
          title = " go to detail screen"
          onPress ={()=>{
            navigation.navigate('Detail' , {data:this.state.id});
            // navigation.push('Detail');
          }}
        />
      </View>
    );
  }
}



