/* 
  * Name: {Navigation}
  * Author: {Jhon Lucas}
  * Creation Date: (29/02/2019)
  * Version: {1.0.0}
  * @patch-notes - (Change Log)
  
*/

 import * as React from 'react';
 import {Text,StatusBar} from 'react-native'
 import { NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator,TransitionPresets} from '@react-navigation/stack';
 import {colors} from '../styles/index'
 import Icon from 'react-native-vector-icons/Entypo';
 import {pxSize} from '../styles/metrics'

//Screens
import BottomTabNavigator from './bottomTabNavigator';


const Stack = createStackNavigator();

 function Title(){
   return <Text style={{  fontSize:24,
    color:'white',textShadowColor:'grey',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 3
  }}>Burguer King</Text>
 }

 function BackImageButton(){
  return <Icon
          name="chevron-thin-left"
          size={pxSize(25)}
          color="white"
          style={{
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 3
          }}
          />
 }

 function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="ligh-content" backgroundColor="transparent" translucent={true} />
      <Stack.Navigator 
        headerMode="screen" 
        screenOptions={{
        headerTitleAlign:'center',
        headerStyle: {
          backgroundColor:colors.background,
          elevation:0,        
        },
        headerBackImage:BackImageButton,
        headerTitle:Title,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
        <Stack.Screen name="Home" component={BottomTabNavigator}  options={{
          headerShown:false,  
          headerTransparent:true
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
