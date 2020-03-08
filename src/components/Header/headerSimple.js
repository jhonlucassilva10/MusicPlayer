import React from 'react'
import {Text,View} from 'react-native';
import Styles from './styles'
import { PropTypes } from 'prop-types';

/**
  * @name Header  
  * @param {string} title - title to be displayed in the header
 */
function Header({ title }) {
    return (
        <View style={Styles.headerSimplecontainer}>         
            <Text style={[Styles.text]}>
                {title}
            </Text>   
        </View>
      
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header
