
import React from 'react'
import {Text,View,TouchableOpacity} from 'react-native';
import Styles from './styles'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';


//profile component still under construction
function ProfileItemSection() {
    return (
        <TouchableOpacity activeOpacity={0.8} style={Styles.profileItemSectionContainer}> 
            <View style={Styles.leftContainerProfileItem}>
                <LinearGradient start={{x: 0.0, y: 1}} end={{x:0.8, y:0.5}} 
                    colors={Styles.gradiente} style={Styles.linearGradient}/>
                <Text style={Styles.title}>
                    TE
                </Text>   
            </View>         
            <View style={Styles.rightContainerProfileItem}>
                <View style={Styles.profileDescriptionContainer}>
                    <Text style={Styles.title}>
                        Tae Ebison
                    </Text>  
                    <Text style={Styles.subtitle}>
                        Premium member
                    </Text>  
                </View> 
                <View style={Styles.iconContainer}>
                    <Icon name="angle-right" size={Styles.icon.fontSize} style={Styles.icon}/>
                </View>   
            </View>
        </TouchableOpacity>
      
    );
  }

export default ProfileItemSection
