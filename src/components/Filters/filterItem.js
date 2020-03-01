


import React from 'react'
import {Text,TouchableOpacity} from 'react-native';
import Styles from './styles'
import LinearGradient from 'react-native-linear-gradient';

function Item({ title,onSelect }) {
    return (
      <TouchableOpacity activeOpacity={0.7} style={[Styles.itemContainer,onSelect?null:Styles.inactiveItem]}>
          {onSelect?
            <LinearGradient start={{x:0, y: 0}} end={{x: 1, y: 0}} colors={Styles.gradiente} style={Styles.linearGradient}/>
          :null}
          <Text style={Styles.itemTitle}>
            {title}
          </Text>
      </TouchableOpacity>
    );
  }

export default Item

