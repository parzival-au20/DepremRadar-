import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import Home from '../screens/Home';
import Buy from '../screens/Buy';
import Account from '../screens/Account';
import Dashboard from '../screens/Dashboard';
import { Image } from 'react-native-elements';
import HeaderRight from '../components/HeaderRight';


export default function NavigationTabs( ) {
  return (
    <>
      <Tab.Navigator 
            screenOptions={() => ({
                headerShown : true,
                tabBarStyle: {height:65,},
                tabBarInactiveTintColor:"#000000",
            })}>

      <Tab.Screen name="Home" component={Home}
            options={() => ({
                tabBarIcon:() =>(  
                    <MaterialCommunityIcons name="waveform" size={35} style={{color:"red"}}/>
                ),
                tabBarLabel: 'Depremler', // Metin belirleme
                tabBarLabelStyle: {fontSize : 14, fontWeight:"bold", marginBottom:10},
                tabBarActiveBackgroundColor: '#FFDEDD',
                tabBarActiveTintColor:"red",
                tabBarItemStyle: {borderRadius:15, marginLeft:10,},
                headerTitle: 'Deprem Radarı',
                headerStyle: { backgroundColor: '#d40e0d' }, // Başlık çubuğunun arka plan rengi
                headerTitleStyle: { color: '#FFFFFF', fontSize: 22 }, // Başlık metninin stili
                headerRight: () => <HeaderRight></HeaderRight>
            })}/>
      <Tab.Screen name="Harita" component={Dashboard} 
            options={() => ({
                tabBarIcon:() =>(
                    <FontAwesome6 name="map-location-dot" size={30} style={{color:"blue"}} />
                ), 
                tabBarLabel: 'Harita', // Metin belirleme
                tabBarLabelStyle: {fontSize : 14, fontWeight:"bold", marginBottom:10},
                tabBarActiveBackgroundColor: '#DDF3FF',
                tabBarActiveTintColor:"blue",
                tabBarItemStyle: {borderRadius:15,},
                headerTitle: 'Depremin Konumu',
                headerStyle: { backgroundColor: 'blue' }, // Başlık çubuğunun arka plan rengi
                headerTitleStyle: { color: '#FFFFFF', fontSize: 22 }, // Başlık metninin stili
            })}/>
      <Tab.Screen name="Tercihler" component={Account} 
            options={() => ({
                tabBarIcon:() =>(
                    <MaterialCommunityIcons name="bag-checked" size={35} color="#EF3900" />
                ),
                tabBarLabel: 'Hazırlık', // Metin belirleme
                tabBarLabelStyle: {fontSize : 14, fontWeight:"bold", marginBottom:10},
                tabBarActiveBackgroundColor: '#FFDD6843',
                tabBarActiveTintColor:"orange",
                tabBarItemStyle: {borderRadius:15, marginRight:10},
                headerTitle: 'Depreme Hazırlık',
                headerStyle: { backgroundColor: 'orange' }, // Başlık çubuğunun arka plan rengi
                headerTitleStyle: { color: '#FFFFFF', fontSize: 22 }, // Başlık metninin stili
            })}/>
      <Tab.Screen name="Buy" component={Buy} 
            options={() => ({
                tabBarIcon:() =>(
                    <Ionicons name="settings" size={30} style={{color: "green"}} />
                ),
                tabBarLabel: 'Tercihler', // Metin belirleme
                tabBarLabelStyle: {fontSize : 14, fontWeight:"bold", marginBottom:10},
                tabBarActiveBackgroundColor: '#AAF6A2',
                tabBarActiveTintColor:"green",
                tabBarItemStyle: {borderRadius:15, marginRight:10},
                headerTitle: 'Ayarlar',
                headerStyle: { backgroundColor: 'green' }, // Başlık çubuğunun arka plan rengi
                headerTitleStyle: { color: '#FFFFFF', fontSize: 22 }, // Başlık metninin stili
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