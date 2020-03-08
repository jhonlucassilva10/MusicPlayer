import React from 'react'
import {Text,TouchableOpacity} from 'react-native';
import Styles from './styles'
import LinearGradient from 'react-native-linear-gradient';
import { PropTypes } from 'prop-types';


/**
  * @name FilterItem  
  * @param {string} title - title to be displayed in the item
  * @param {bool} onSelect - value to be passed to indicate whether the item is selected or not
 */

function FilterItem({ title,onSelect }) {
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

FilterItem.propTypes = {
  title: PropTypes.string.isRequired,
  onSelect: PropTypes.bool.isRequired,
};  

export default Item

