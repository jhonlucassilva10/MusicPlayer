import React from 'react'
import {Text,View,TouchableOpacity} from 'react-native';
import Styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import Avatar from '../Avatar/avatarConnected'
import { PropTypes } from 'prop-types';


/**
  * @name ProfileItemSection  
  * @param {object} googleUser - object with user data such as email, photos and name
 */

function ProfileItemSection(props) {
    return (
        <TouchableOpacity activeOpacity={0.8}
        style={Styles.profileItemSectionContainer}> 
            <View style={Styles.leftContainerProfileItem}>
                <Avatar/> 
                <View style={Styles.profileDescriptionContainer}>
                    <Text style={Styles.title}>
                        {props.googleUser.name || "No user logged in"}
                    </Text>  
                    <Text style={Styles.subtitle}>
                        {props.googleUser.email||"login to see your email address"}
                    </Text>  
                </View> 
            </View>         
            <View style={Styles.rightContainerProfileItem}>
                <View style={Styles.iconContainer}>
                    <Icon name="angle-right" size={Styles.icon.fontSize} style={Styles.icon}/>
                </View>   
            </View>
        </TouchableOpacity>
      
    );
  }

ProfileItemSection.propTypes = {
    googleUser: PropTypes.object.isRequired,
};

export default ProfileItemSection
