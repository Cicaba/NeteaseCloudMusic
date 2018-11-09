/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,StatusBar, View} from 'react-native';
import { Button ,Header } from 'react-native-elements'
//测试平台
const instructions = Platform.select({
  ios: '你好我是苹果设备!',
  android:"你好我是android设备!"
});

export default class App extends Component {
  constructor(Props){
    super(Props)
    this.state={
      text:"明天你好!我在开发!",
      headerState : 2
    }
  }
  onLongPress(e){
    this.setState({text:"明天你好!我在开发yayaya!"})
  }
  changeMenu(n){
    this.setState({headerState:n})
  }
  render() {
    return (
      <View style={styles.container}>
        {/*导航栏颜色*/}
        <StatusBar backgroundColor={'#ff1a21'}></StatusBar>
        {/*头部导航*/}
        <View style={styles.header}>
          <View style={{width:"10%"}}>
            <Text onPress={()=>{this.changeMenu(1)}} style={this.state.headerState==1 ? styles.selectIcon : styles.headerIcon}>&#xf008;</Text>
          </View>
          <View style={styles.headerCenter}>
            <Text onPress={()=>{this.changeMenu(2)}} style={this.state.headerState==2 ? styles.selectIcon : styles.headerIcon}>&#xe802;</Text>
            <Text onPress={()=>{this.changeMenu(3)}} style={this.state.headerState==3 ? styles.selectIcon : styles.headerIcon}>&#xe803;</Text>
            <Text onPress={()=>{this.changeMenu(4)}} style={this.state.headerState==4 ? styles.selectIcon : styles.headerIcon}>&#xe801;</Text>
          </View>
          <View style={{width:"10%"}}>
            <Text onPress={()=>{this.changeMenu(5)}} style={this.state.headerState==5 ? styles.selectIcon : styles.headerIcon}>&#xe800;</Text>
          </View>
        </View>
        <Text>{this.state.headerState}</Text>
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
    flexWrap:"wrap",
    width:"100%"
  },
  header:{
    alignItems:"center",
    flexDirection:"row",
    paddingLeft:20,
    paddingRight:20,
    height:50,
    width:"100%",
    backgroundColor:"#ff1a21"
  },
  headerCenter:{
    width:"80%",
    paddingLeft:"22%",
    paddingRight:"22%",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  headerIcon:{
    fontFamily:'fontello',
    color:"#ccc",
    fontSize:22
  },
  selectIcon:{
    fontFamily:'fontello',
    color:"#fff",
    fontSize:22
  }
});
