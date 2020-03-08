import React from 'react'
import {View,Text} from 'react-native'
import Styles from './styles'


class Search extends React.Component {
    constructor() {
      super();
      this.state = {}
    }
    
    render() {
      return (
        <View style={Styles.container}>
            <Text style={{color:'white'}}>the Search screen is still being built</Text>
        </View>
      )
    }
  }
  
  export default Search;