import {Router, Scene,Actions} from "react-native-router-flux";
import React,{Component} from 'react';
import App from './App';
import Search from './Components/search'
import UserMusic from './Components/UserMusic'
export default class router extends Component {
  constructor(props){
    super(props)
  }
  backAndroid(){
    if(Actions.state.index!==0){
      return true
    }
  }
  render(){
    return(
      <Router  backAndroidHandler={()=>this.backAndroid()}>
        <Scene key="root">
          {/* key 就是给页面的标签,供Actions使用 */}
          {/* component 设置关联的页面 */}
          {/* title 就是给页面标题 */}
          {/* initial 就是设置默认页面*/}


          {/*<Scene key="App" component={App} hideNavBar={true} initial={true}></Scene>*/}
          <Scene key="App" navBar={App} component={UserMusic} initial={true}></Scene>
          <Scene key="UserMusic" component={UserMusic} navBar={App}/>
          <Scene key="Search" title={"搜索"} navigationBarStyle={{backgroundColor:"rgb(255,70,0)"}} navBarButtonColor={"#fff"} component={Search}></Scene>
        </Scene>
      </Router>
    )
  }
}