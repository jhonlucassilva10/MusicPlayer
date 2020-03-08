
import React,{useState} from 'react'
import {Text,View,Image,ActivityIndicator} from 'react-native';
import Styles from './styles'
import {colors} from '../../styles'
import TouchableScale from 'react-native-touchable-scale';

function Item(props) {

    const [fullLoading,setfullLoading] = useState(false)
 
    return (
      <TouchableScale  activeScale={0.95} style={[Styles.itemContainer]}>
        <View style={{width:'100%',height:'80%'}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            {!fullLoading?<ActivityIndicator size="large" color={colors.gradient.first} style={{position:'absolute',zIndex:2}}/>:null}
              <Image
                  source={{ uri:props.image }}
                  style={Styles.image}
                  onLoad={() => setfullLoading(fullLoading=>fullLoading=true)}
              /> 
              {fullLoading?<Text style={[Styles.itemTitle,{position:'absolute'}]}>
                {props.title}
              </Text>:null}
            </View>
            <Text style={[Styles.itemTitle]}>
                {props.title}
            </Text>   
        </View>
       </TouchableScale>
      
    );
  }

export default Item
