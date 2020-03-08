/* 
  * Name: {Profile}
  * Author: {Jhon Lucas}
  * Creation Date: (01/03/2019)
  * Version: {1.0.0}
  * @patch-notes - (Change Log) 
*/

import React from 'react'
import {View,ScrollView,SafeAreaView} from 'react-native'
import Styles from './styles'
import {
    HeaderSimple,
    ProfileItemSection,
    Section,
    Divider,
    ItemSection
} from '../../components';

import { GoogleSignin} from '@react-native-community/google-signin';


signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    //this.setState({ user: null }); // Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
};


class Profile extends React.Component {
    constructor() {
      super();
      this.state = {}
    }
  
    render() {
      return (
        <SafeAreaView style={Styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View >
              <HeaderSimple title="Account settings"/>
              <ProfileItemSection/>
              <ItemSection margin title={'Sign out'} onPress={signOut} description={'just click here if you want to sign out'}/>
              <Divider/>
              <Section title={'Playback'}>
                <ItemSection title={'Crossfade'}/>
                <ItemSection title={'Lourdness normalization'} />
                <ItemSection title={'Autoplay'} description={'Play no-stop music.When you are finished with your last track, we will start a track radio based on the last track you played'}/>
              </Section>
              <Divider/>
              <Section title={'Quality'}>
                <ItemSection title={'Streaming'} />
              </Section>
            </View>
          </ScrollView>
        </SafeAreaView>
      )
    }
  }
  
  export default Profile;

