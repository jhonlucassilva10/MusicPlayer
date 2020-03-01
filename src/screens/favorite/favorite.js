/* 
  * Name: {Favorite}
  * Author: {Jhon Lucas}
  * Creation Date: (29/02/2019)
  * Version: {1.0.0}
  * @patch-notes - (Change Log) 
*/

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