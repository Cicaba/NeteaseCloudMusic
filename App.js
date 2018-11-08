/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Image, View} from 'react-native';
import { Button ,Header } from 'react-native-elements'
//测试平台
const instructions = Platform.select({
  ios: '你好我是苹果设备!',
  android:"你好我是android设备!"
});

export default class App extends Component {
  constructor(Props){
    super(Props)
    this.state={text:"明天你好!我在开发!"}
  }
  onLongPress(e){
    this.setState({text:"明天你好!我在开发yayaya!"})
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor="#f03"
          outerContainerStyles={{height:54}}
          innerContainerStyles={{alignItems:"center"}}
          leftComponent={{ icon: 'menu', color: '#fff',width:32 }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff',width:300,textAlignVertical:"center", textAlign:"center",includeFontPadding:false } }}
          // centerComponent={<View><Image source={require('./android/app/src/main/res/drawable/music-note.png')}/></View>}
          rightComponent={{ icon: 'search', color: '#fff',width:32 }}
        />
        {/*<Text style={styles.welcome} selectable={true}>{this.state.text}</Text>*/}
        {/*<Text style={styles.instructions}>{instructions}</Text>*/}
        {/*<Button*/}
          {/*icon={{name: 'envira', type: 'font-awesome'}}*/}
          {/*rounded={true}*/}
          {/*backgroundColor={'#0f0'}*/}
          {/*underlayColor={'#f60'}*/}
          {/*disabled={false}*/}
          {/*onLongPress={(e)=>{this.onLongPress(e)}}*/}
          {/*borderRadius={1}*/}
          {/*textStyle={{color:"#f60"}}*/}
          {/*title='登陆' />*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
