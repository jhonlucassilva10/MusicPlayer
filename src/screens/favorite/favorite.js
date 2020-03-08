import React from 'react'
import {View} from 'react-native'
import Styles from './styles'
import {
    SearchBar,
    Filters,
    CardList
} from '../../components';

class Favorite extends React.Component {
    constructor() {
      super();
      this.state = {}
    }
    
    render() {
      return (
        <View style={Styles.container}>
          <SearchBar placeholder="Search in Playlist"/>
          <Filters/>
          <CardList/>
        </View>
      )
    }
  }
  
  export default Favorite;