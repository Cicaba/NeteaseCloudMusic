import React,{Component} from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
export default class HeaderCenter extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View>
        <View><Image source={require('../android/app/src/main/res/drawable/music-note.png')}/></View>
        <View><Image/></View>
        <View><Image/></View>
      </View>
    )
  }
}