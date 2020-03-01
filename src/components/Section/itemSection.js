
import React from 'react'
import {Text,View,TouchableOpacity} from 'react-native';
import Styles from './styles'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';


function ItemSection() {
    return (
        <TouchableOpacity activeOpacity={0.8} style={Styles.profileItemSectionContainer}> 
            <View style={Styles.leftContainer}>  
            </View>         
            <View style={Styles.rightContainer}>   
            </View>
        </TouchableOpacity>
      
    );
  }

export default ItemSection
