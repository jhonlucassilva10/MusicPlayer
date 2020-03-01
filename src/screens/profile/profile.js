/* 
  * Name: {Profile}
  * Author: {Jhon Lucas}
  * Creation Date: (01/03/2019)
  * Version: {1.0.0}
  * @patch-notes - (Change Log) 
*/

import React from 'react'
import {View,Text} from 'react-native'
import Styles from './styles'
import {
    HeaderSimple,
    ProfileItemSection,
    Section
} from '../../components';

class Profile extends React.Component {
    constructor() {
      super();
      this.state = {}
    }
    
    render() {
      return (
        <View style={Styles.container}>
          <HeaderSimple title="Account settings"/>
          <ProfileItemSection/>
          <Section>
            <Text color='red'>TESTE</Text>
          </Section>
        </View>
      )
    }
  }
  
  export default Profile;