
import React from 'react'
import {Text,View,TouchableOpacity,Image} from 'react-native';
import Styles from './styles'

function ListHeaderComponent({ title }) {
    return (
      <TouchableOpacity activeOpacity={0.7} style={[Styles.itemContainer]}>
      <View style={{width:'100%',height:'80%'}}>
          <View style={Styles.borderDashedLine}>
            <Text style={{fontSize:25,color:'white'}}>
                +
            </Text> 
          </View>
          <Text style={[Styles.itemTitle]}>
              Create PlayList
          </Text>   
      </View>
     </TouchableOpacity>
    );
  }

export default ListHeaderComponent

