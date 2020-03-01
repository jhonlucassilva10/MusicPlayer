
import React from 'react'
import {Text,View,Image} from 'react-native';
import Styles from './styles'
import TouchableScale from 'react-native-touchable-scale';

function Item(props) {
    return (
      <TouchableScale  activeScale={0.95} style={[Styles.itemContainer]}>
        <View style={{width:'100%',height:'80%'}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image
                  source={{ uri:props.image }}
                  style={Styles.image}
              /> 
              <Text style={[Styles.itemTitle,{position:'absolute'}]}>
                {props.title}
              </Text> 
            </View>
            <Text style={[Styles.itemTitle]}>
                {props.title}
            </Text>   
        </View>
       </TouchableScale>
      
    );
  }

export default Item
