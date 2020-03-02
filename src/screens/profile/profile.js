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

class Profile extends React.Component {
    constructor() {
      super();
      this.state = {}
    }
    
    render() {
      return (
        <SafeAreaView style={Styles.container}>
          <ScrollView>
            <View >
              <HeaderSimple title="Account settings"/>
              <ProfileItemSection/>
              <ItemSection margin title={'Offline Mode'} description={'Only downloaded content will be available'}/>
              <Divider/>
              <Section title={'Playback'}>
                <ItemSection title={'Crossfade'}/>
                <ItemSection title={'Lourdness normalization'} />
                <ItemSection title={'Autoplay'} description={'Play no-stop music.When you are finished with your last track, we will start a track radio based on the last track you played'}/>
              </Section>
              <Divider/>
              <Section title={'Quality'}>
                <ItemSection title={'Streaming'} />
                <ItemSection title={'Streaming'} />
              </Section>
            </View>
          </ScrollView>
        </SafeAreaView>
      )
    }
  }
  
  export default Profile;

