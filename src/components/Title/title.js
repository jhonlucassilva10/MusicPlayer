
import React from 'react'
import {Text,View} from 'react-native';
import Styles from './styles'

function Title(props) {
    return (
      <View style={[Styles.container,{marginLeft:props.margin?Styles.margin:null}]}>          
        <Text style={Styles.title} {...props}>
            {props.title}
        </Text>   
      </View>
      
    );
  }

export default Title