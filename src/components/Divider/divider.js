
import React from 'react'
import {Text,View} from 'react-native';
import Styles from './styles'

function Divider() {
    return (
        <View style={Styles.container}>
            <View style={Styles.line}/>
        </View>             
    );
}

export default Divider
