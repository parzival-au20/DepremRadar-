import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import Home from '../screens/Home';
import Buy from '../screens/Buy';
import Account from '../screens/Account';
import Dashboard from '../screens/Dashboard';
import { Image } from 'react-native-elements';


export default function NavigationTabs() {
  return (
    <>
      <Tab.Navigator 
            screenOptions={({}) => ({
                headerShown : false,
                tabBarStyle: {height:65,},
                tabBarInactiveTintColor:"#000000",
            })}>

      <Tab.Screen name="Depremler" component={Home} 
            options={({focused}) => ({
                tabBarIcon:({focused}) =>(  
                    <MaterialCommunityIcons name="waveform" size={35} style={{color:"red"}}/>
                ),
                tabBarLabel: 'Depremler', // Metin belirleme
                tabBarLabelStyle: {fontSize : 14, fontWeight:"bold", marginBottom:10},
                tabBarActiveBackgroundColor: '#FFDEDD',
                tabBarActiveTintColor:"red",
                tabBarItemStyle: {borderRadius:15, marginLeft:10,}
            })}/>
      <Tab.Screen name="Harita" component={Dashboard} 
            options={({focused}) => ({
                tabBarIcon:({focused}) =>(
                    <FontAwesome6 name="map-location-dot" size={30} style={{color:"blue"}} />
                ), 
                tabBarLabel: 'Harita', // Metin belirleme
                tabBarLabelStyle: {fontSize : 14, fontWeight:"bold", marginBottom:10},
                tabBarActiveBackgroundColor: '#DDF3FF',
                tabBarActiveTintColor:"blue",
                tabBarItemStyle: {borderRadius:15,}
            })}/>
      <Tab.Screen name="Tercihler" component={Account} 
            options={({focused}) => ({
                tabBarIcon:({focused}) =>(
                    <Ionicons name="settings" size={30} style={{color: "green"}} />
                ),
                tabBarLabel: 'Tercihler', // Metin belirleme
                tabBarLabelStyle: {fontSize : 14, fontWeight:"bold", marginBottom:10},
                tabBarActiveBackgroundColor: '#AAF6A2',
                tabBarActiveTintColor:"green",
                tabBarItemStyle: {borderRadius:15, marginRight:10}
            })}/>
    </Tab.Navigator>
    </>
  )
}

const styles = (focused) => StyleSheet.create({
    iconImage : {
        width : 20,
        height : 20,
        color: "black",
        tintColor : focused? "blue" : "black",
    },
})