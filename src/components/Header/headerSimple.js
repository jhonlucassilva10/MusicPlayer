
import React from 'react'
import {Text,View} from 'react-native';
import Styles from './styles'

function Header({ title }) {
    return (
        <View style={Styles.headerSimplecontainer}>         
            <Text style={[Styles.text]}>
                {title}
            </Text>   
        </View>
      
    );
}

export default Header
