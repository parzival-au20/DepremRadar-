import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useFocusEffect } from "@react-navigation/native";


import KapaliAlan from './KapaliAlan';
import AcikAlan from './AcikAlan';
import Enkazda from './Enkazda';

const OnlemStack  = createNativeStackNavigator();

const ListItem = ({title}) => (
    <View style={[styles.ListItem]}>
      <View style={styles.info}>
        <Text style={styles.textItem}>{title}</Text>
      </View>
    </View>
);

function DepremSonrasiMain(){
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      // Üst seviye action bar'ı göstermek için ayarları değiştirin
      navigation.getParent()?.setOptions({ headerShown: true });
      return () => {
        // Ekrandan çıkıldığında üst seviye action bar'ı gizleyin
        navigation.getParent()?.setOptions({ headerShown: false });
      };
    }, [navigation])
  );
  return(
      <View style = {styles.main}>
        <ImageBackground
        source={require('../tatbikatAssets/tatbikat_backround.jpg')} // Burada arka plan resminizin yolunu belirtin
        style={styles.background} >
            <TouchableOpacity 
                onPress={()=>
                navigation.navigate("KapaliAlan")
              }>
            <ListItem title="KAPALI ALANDAYSANIZ"/>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=>
                navigation.navigate("AcikAlan")
              }>
            <ListItem title="AÇIK ALANDAYSANIZ"/>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=>
                navigation.navigate("Enkazda")
              }>
            <ListItem title="YIKINTI ALTINDA MAHSUR KALDIYSANIZ"/>
            </TouchableOpacity>
        </ImageBackground>
      </View>
  )
}
export default function DepremSonrasiOnlem() {

  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      // Üst seviye action bar'ı gizlemek için ayarları değiştirin
      navigation.getParent()?.setOptions({ headerShown: false });
    }, [navigation])
  );
  
  return (
    <OnlemStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#fb7f01' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }}>
      <OnlemStack.Screen name="DepremSonrasiMain" component={DepremSonrasiMain} options={{ headerShown: false }} />
      <OnlemStack.Screen name="KapaliAlan" component={KapaliAlan} options={{ title: 'Kapalı Alandaysanız' }}/>
      <OnlemStack.Screen name="AcikAlan" component={AcikAlan} options={{ title: 'Açık Alandaysanız' }}/>
      <OnlemStack.Screen name="Enkazda" component={Enkazda} options={{ title: 'Enkaz Altındaysanız !!!' }}/>
    </OnlemStack.Navigator>
  )
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor : "#e2f8ff",
    borderWidth:0,
    justifyContent:"center",
  },
  background: {
    flex: 1,
    resizeMode: 'contain', // or 'stretch'
    justifyContent: 'center',
  },
  info :{
    flexDirection:"row",
    borderColor: "black",
    borderWidth:0,
    marginVertical:10,
    justifyContent:"center"
  },
  textItem: {
      fontSize : 20,
      fontWeight:"700",
      textAlign:"center",
      color : "white",
      fontFamily:"sans-serif",
  },
  ListItem:{
    flexDirection:"column", 
    backgroundColor:"#fb7f01",
    marginTop:10, 
    marginBottom:20,
    borderRadius:20,
    borderColor:"purple", 
    width:370,
    height:80,
    borderWidth:0,
    justifyContent:"center",
  },
})