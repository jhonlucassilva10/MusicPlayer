import React from 'react'
import {View,Text} from 'react-native'
import Styles from './styles'


class Music extends React.Component {
    constructor() {
      super();
      this.state = {}
    }
    
    render() {
      return (
        <View style={Styles.container}>
            <Text style={{color:'white'}}>the Music screen is still being built</Text>
        </View>
      )
    }
  }
  
  export default Music;