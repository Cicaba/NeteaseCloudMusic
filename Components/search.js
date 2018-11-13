import React,{Component} from 'react';
import { Text, View} from 'react-native';
import { FormInput } from 'react-native-elements';

export default class Search extends Component {
  constructor(props){
    super(props)
    this.state={
      searchText:""
    }
  }
  search(t){
    this.setState({
      searchText:t
    })
  }
  searchEnd(){
    this.setState({
      searchText:'输入结束！'
    })
  }
  render(){
    return(
      <View>
        <FormInput onChangeText={(t)=>{this.search(t)}} onEndEditing={()=>this.searchEnd()} placeholder={"请输入歌曲"} inputStyle={{borderBottomWidth:1,color:"#000"}}/>
        <Text>{this.state.searchText}</Text>
      </View>
    )
  }
}