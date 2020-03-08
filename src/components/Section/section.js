import React from 'react'
import {View} from 'react-native';
import Styles from './styles'
import Title from '../Title'
import { PropTypes } from 'prop-types';


/**
  * @name Section  
  * @param {string} title - The text to be displayed in the session title
  * @param {element} children - Are the session items that will be displayed in the session body
  */

function Section(props) {
    return (
      <View style={Styles.container} {...props}> 
        <Title title={props.title} />
        {props.children}
      </View>
    );
  }

Section.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Section
