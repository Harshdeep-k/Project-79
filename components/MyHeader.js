import * as React from 'react';
import {Text,View} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from "react-native-safe-area-context";

export default class MyHeader extends React.Component{
  constructor(props)
  {
    super(props);
  }
  
  render()
  {
    return(
      <View>
      <SafeAreaProvider>
      <Header backgroundColor="#022e57"
      centerComponent={{text: this.props.title, style:{
        fontWeight:"bold", fontSize:23, color:"#ffffff", fontFamily:"Itim"
      }}}/>
      </SafeAreaProvider>
      </View>
    )
  }
}