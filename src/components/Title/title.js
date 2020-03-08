
import React from 'react'
import {Text,View} from 'react-native';
import Styles from './styles'
import { PropTypes } from 'prop-types';

/**
  * @name Title
  * @param {string} title - the text to be displayed in the title
  * @param {number} margin - the value to be applied to the left margin of the title
  * @param {object} styles - custom styles to be applied to the title
  */

function Title(props) {
    return (
      <View style={[Styles.container,{marginLeft:props.margin?Styles.margin:null}]}>          
        <Text style={Styles.title} {...props}>
            {props.title}
        </Text>   
      </View>
      
    );
  }


Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title