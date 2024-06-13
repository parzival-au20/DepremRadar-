import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import NavigationTabs from './Navigation/NavigationTabs';
import { NavigationContainer} from '@react-navigation/native'
import HeaderRight from './components/HeaderRight';
import Home from './screens/Home';
import ResultsProvider from './hooks/useResults';
import SplashScreen from './screens/splashScreen';

const Stack = createStackNavigator();

function ScreenOverView({ navigation }) {
  return(
    <NavigationTabs navigation={navigation}></NavigationTabs>
  );
}
export default function App() { 

  return (
    <NavigationContainer>
      <ResultsProvider>
          <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
          />
          <Stack.Screen
          name="Deprem"
          component={ScreenOverView}
          />
          </Stack.Navigator>
      </ResultsProvider>     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
