 import * as React from 'react';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 //Icon Fonts
 import FontAwesome from "react-native-vector-icons/MaterialCommunityIcons";
 import MaterialIcons from "react-native-vector-icons/MaterialIcons";
 //Styles
 import {colors} from '../styles'
 //Screens
 import {
    Home,
    Music,
    Search,
    Favorite,
    Profile}from '../screens'
 
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
        component={Music}
        options={{
            tabBarLabel: 'Music',
            tabBarIcon: ({ color, size }) => (
            <FontAwesome name="music" color={color} size={size} />
            ),
        }}
        />
         <Tab.Screen
        name="Search"
        component={Search}
        options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" color={color} size={size} />
            ),
        }}
        />
        <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart-outline" color={color} size={size} />
            ),
        }}
        />
        <Tab.Screen
        name="Profile"
        component={Profile}
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