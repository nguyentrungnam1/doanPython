import React, {Component, useState} from 'react';
import {StatusBar, View, Text, Button, Alert ,StyleSheet, TouchableOpacity} from 'react-native';


export default class DetailScreen extends Component{
  render(){
    const {navigation} = this.props;
    return(
      <View>
      
        <Button
          title = " back to home screen"
          onPress ={()=>{
            navigation.navigate('Home');
          }}
        />
        <Button
          title = " go to detail again"
          onPress ={()=>{
            // navigation.navigate('Detail');
            navigation.push("Detail");
          }}
        />
      </View>
    );
  }
}
