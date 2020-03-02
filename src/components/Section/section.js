
import React from 'react'
import {View} from 'react-native';
import Styles from './styles'
import Title from '../Title'

function Section(props) {
    return (
      <View style={Styles.container} {...props}> 
        <Title title={props.title} />
        {props.children}
      </View>
    );
  }

export default Section
