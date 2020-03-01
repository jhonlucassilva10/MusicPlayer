
import React from 'react'
import {Text,View,TouchableOpacity,Image} from 'react-native';
import Styles from './styles'

function Item({ title }) {
    return (
      <TouchableOpacity activeOpacity={0.7} style={[Styles.itemContainer]}>
        <View style={{width:'100%',height:'80%'}}>
            <Image
                source={{ uri:'https://image.freepik.com/vetores-gratis/fundo-abstrato-de-particulas-com-efeito-de-luz_1017-20135.jpg' }}
                style={{ width:'100%', height:'100%',borderRadius:10}}
            /> 
            <Text style={[Styles.itemTitle]}>
                {title}
            </Text>   
        </View>
       </TouchableOpacity>
      
    );
  }

export default Item
