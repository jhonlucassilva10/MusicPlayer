/* 
  * Name: {Navigation}
  * Author: {Jhon Lucas}
  * Creation Date: (29/02/2019)
  * Version: {1.0.0}
  * @patch-notes - (Change Log)
  
*/

 import * as React from 'react';
 import {StatusBar} from 'react-native'
 import { NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator,TransitionPresets} from '@react-navigation/stack';
 import {colors} from '../styles/index'

//Screens
import BottomTabNavigator from './bottomTabNavigator';
import {Login} from '../screens'

const Stack = createStackNavigator();

 function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="ligh-content" backgroundColor="transparent" translucent={true} />
      <Stack.Navigator 
        initialRouteName="Login"
        headerMode="screen" 
        screenOptions={{
        headerTitleAlign:'center',
        headerStyle: {
          backgroundColor:colors.background,
          elevation:0,        
        },
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
        <Stack.Screen name="Home" component={BottomTabNavigator}  options={{
          headerShown:false,  
          headerTransparent:true
        }}/>
        <Stack.Screen name="Login" component={Login}  options={{
          headerShown:false,  
          headerTransparent:true
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
