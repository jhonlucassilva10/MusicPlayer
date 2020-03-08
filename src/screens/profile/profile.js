import React from 'react'
import {View,ScrollView,SafeAreaView} from 'react-native'
import Styles from './styles'
import {
    HeaderSimple,
    ProfileItemSection,
    Section,
    Divider,
    ItemSection,
    UserSignOut
} from '../../components';

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
              <ItemSection margin title={'OfflineMode'} description={'Only download content will be available'}/>
              <Divider/>
              <Section title={'Playback'}>
                <ItemSection title={'Crossfade'}/>
                <ItemSection title={'Lourdness normalization'} />
                <ItemSection title={'Autoplay'} description={'Play no-stop music.When you are finished with your last track, we will start a track radio based on the last track you played'}/>
              </Section>
              <Divider/>
              <UserSignOut navigation={this.props.navigation}/>
            </View>
          </ScrollView>
        </SafeAreaView>
      )
    }
  }
  
  export default Profile;

