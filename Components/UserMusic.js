import React,{Component} from 'react';
import { Text, View} from 'react-native';

export default class UserMusic extends Component {
  constructor(props){
    super(props)
    this.state={
      searchText:"输入结束"
    }
  }
  render(){
    return(
      <View>
        <Text>{this.state.searchText}</Text>
      </View>
    )
  }
}