
import React from 'react'
import {Text,View,TouchableOpacity} from 'react-native';
import Styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { PropTypes } from 'prop-types';

/**
  * Must be used in the body of the session
  * @name ItemSection  
  * @param {string} title - the text to be displayed in the item title
  * @param {string} description - item description
  * @param {function} onPress - function to be performed when the item is clicked
  */
 
function ItemSection(props) {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onPress} style={[Styles.itemSectionContainer,props.margin?Styles.margin:null]}> 
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

ItemSection.propTypes = {
    title: PropTypes.string.isRequired,
};



export default ItemSection
