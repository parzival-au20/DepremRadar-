import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import DepremOncesi from "./DepremOncesi";
import DepremAninda from "./DepremAninda";
import DepremSonrasi from "./DepremSonrasi";

const OnlemStack  = createNativeStackNavigator();

const ListItem = ({title}) => (
    <View style={[styles.ListItem]}>
      <View style={styles.info}>
        <Text style={styles.textItem}>{title}</Text>
      </View>
    </View>
);

function TatbikatOnlemMain(){
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
                navigation.navigate("DepremOncesi")
              }>
            <ListItem title="DEPREM ÖNCESİ ALINACAK ÖNLEMLER"/>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=>
                navigation.navigate("DepremAninda")
              }>
            <ListItem title="DEPREM ANINDA YAPILMASI GEREKENLER"/>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=>
                navigation.navigate("DepremSonrasi")
              }>
            <ListItem title="DEPREM SONRASINDA YAPILMASI GEREKENLER"/>
            </TouchableOpacity>
        </ImageBackground>
      </View>
  )
}
export default function TatbikatOnlem() {

  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      // Üst seviye action bar'ı gizlemek için ayarları değiştirin
      navigation.getParent()?.setOptions({ headerShown: false });
    }, [navigation])
  );
  
  return (
    <OnlemStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#fb7f01' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }}>
      <OnlemStack.Screen name="TatbikatOnlemMain" component={TatbikatOnlemMain} options={{ headerShown: false }} />
      <OnlemStack.Screen name="DepremOncesi" component={DepremOncesi} options={{ title: 'Deprem Öncesi' }}/>
      <OnlemStack.Screen name="DepremAninda" component={DepremAninda} options={{ title: 'Deprem Aninda' }}/>
      <OnlemStack.Screen name="DepremSonrasi" component={DepremSonrasi} options={{ title: 'Deprem Sonrasi' }}/>
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