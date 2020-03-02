
import React from 'react'
import {Text,View,TouchableOpacity} from 'react-native';
import Styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from '../ToggleSwitch/toggleSwitch'

function ItemSection(props) {
    return (
        <TouchableOpacity activeOpacity={0.7} style={[Styles.itemSectionContainer,props.margin?Styles.margin:null]}> 
            <View style={[Styles.upContainer]}>  
                <Text style={Styles.title}>{props.title}</Text>
                <View style={Styles.iconContainer}>
                    <Icon name="angle-right" size={Styles.icon.fontSize} style={Styles.icon}/>
                </View>  
            </View>         
            <View  style={Styles.downContainer}>  
                {props.description?<Text style={Styles.subTitle}>{props.description}</Text>:null} 
            </View>
        </TouchableOpacity>
      
    );
  }

export default ItemSection
