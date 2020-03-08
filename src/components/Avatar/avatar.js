import React, { Component } from 'react';
import {View,Image,Text} from 'react-native';
import Styles from './styles';
import LinearGradient from 'react-native-linear-gradient'
import { PropTypes } from 'prop-types';


class Avatar extends Component {

    
    /**this function was created to select the initials of the user's first and last name, 
    *so that they can be displayed in the absence of a profile photo
    * @name getInitials
    * @param {string} userName - the user's first and last name or full name
    * @returns {string}  the initials of the name
    */

    getInitials(userName) {
    var names = userName.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
    };

  render() {
    var nameInitials = (this.getInitials(this.props.googleUser.name||"No user logged in"));
    return (
        <View style={Styles.avatar}>
            {this.props.googleUser.photo!=null
            ?<Image source={{ uri: this.props.googleUser.photo }} style={Styles.image}/>
            :<><LinearGradient start={{x: 0.0, y: 1}} end={{x:0.8, y:0.5}} 
                colors={Styles.gradiente} style={Styles.linearGradient}/>
                <Text style={Styles.title}>{nameInitials}</Text></>}
        </View> 
    );
  }

}

Avatar.propTypes = {
    googleUser: PropTypes.object.isRequired,
};

export default Avatar;
