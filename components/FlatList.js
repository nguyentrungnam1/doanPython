import React, {Component, useState} from 'react';
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
  
  
  
  