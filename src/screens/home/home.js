/* 
  * Name: {Home}
  * Author: {Jhon Lucas}
  * Creation Date: (01/03/2019)
  * Version: {1.0.0}
  * @patch-notes - (Change Log) 
*/

import React from 'react'
import {View,Text} from 'react-native'
import Styles from './styles'

class Home extends React.Component {
    constructor() {
      super();
      this.state = {}
    }
    
    render() {
      return (
        <View style={Styles.container}>
          <Text style={{color:'white'}}>the Home screen is still being built</Text>
        </View>
      )
    }
  }
  
  export default Home;