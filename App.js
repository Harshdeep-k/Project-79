import * as React from 'react';
import {Text} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import LoginScreen from "./screens/LoginScreen";
import {AppTabNavigator} from "./components/AppTabNavigator";


export default class App extends React.Component{
  render(){
  return(
    <AppContainer/>
  )
}
}

const AppNavigator=createSwitchNavigator({ 
     Home:{screen: AppTabNavigator},
  Login:{screen: LoginScreen},

   
  
   }
)
const AppContainer=createAppContainer(AppNavigator)