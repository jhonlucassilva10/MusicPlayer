/* 
  * Name: {bottomTabNavigator}
  * Author: {Jhon Lucas}
  * Creation Date: (29/02/2019)
  * Version: {1.0.0}
  * @patch-notes - (Change Log)
  
*/

 import * as React from 'react';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 //Fonts
 import FontAwesome from "react-native-vector-icons/MaterialCommunityIcons";
 import MaterialIcons from "react-native-vector-icons/MaterialIcons";
 //Styles
 import {colors} from '../styles'
 //Screens
 import {Home} from '../screens'
 
 const Tab = createBottomTabNavigator();
 
 function Tabs() {
   return (
      <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor:'white',
        inactiveTintColor:colors.clearer,
        showLabel:false,
        activeBackgroundColor:colors.background,
        inactiveBackgroundColor:colors.background,
      }}
      >
        <Tab.Screen
        name="Home"
        component={Home}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home-outline" color={color} size={size} />
            ),
        }}
        />
        <Tab.Screen
        name="Music"
        component={Home}
        options={{
            tabBarLabel: 'Music',
            tabBarIcon: ({ color, size }) => (
            <FontAwesome name="music" color={color} size={size} />
            ),
        }}
        />
         <Tab.Screen
        name="Find"
        component={Home}
        options={{
            tabBarLabel: 'Find',
            tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" color={color} size={size} />
            ),
        }}
        />
        <Tab.Screen
        name="Favoritos"
        component={Home}
        options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart-outline" color={color} size={size} />
            ),
        }}
        />
        <Tab.Screen
        name="Perfil"
        component={Home}
        options={{
            tabBarLabel: 'Profile',          
            tabBarIcon: ({ color, size }) => (
            <FontAwesome name="account-outline" color={color} size={size} />
            ),
        }}
         />
   </Tab.Navigator>
   );
 }
 
 export default Tabs