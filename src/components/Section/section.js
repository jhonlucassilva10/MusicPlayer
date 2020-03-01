
import React from 'react'
import {Text,View} from 'react-native';
import Styles from './styles'

function Section({ title }) {
    return (
      <View style={Styles.container}>          
        <Text style={Styles.title}>
            {title}
        </Text>   
      </View>
      
    );
  }

export default Section
