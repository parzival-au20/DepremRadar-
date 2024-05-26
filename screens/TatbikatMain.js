import { StyleSheet, Text, View, Image, Platform, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRulerVertical,faAngleRight } from '@fortawesome/free-solid-svg-icons';
import TatbikatVideo from "./TatbikatVideo";
import TatbikatTest from "./TatbikatTest";
import DepremCantasi from './DepremCantasi';
import TatbikatOnlem from "./TatbikatOnlem"

const TatbikatStack  = createNativeStackNavigator();

function TatbikatMain() {

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

  return (
    <View style = {styles.main}>
      <TouchableOpacity 
          onPress={()=>
            navigation.navigate("TatbikatVideo")
          }>
        <View style = {[styles.ListItem, {marginTop:50}]}>
          <View style = {styles.info}>
            <Text style ={styles.textItem}>Deprem Tatbikatı Video</Text>
            <View style = {styles.imageContainer}>
              <Image
                source={require('../assets/play.png')}
                style={styles.image}
              />
            </View>
          </View>
          <View style = {styles.textView}>
              <Text style = {styles.textFont}>Deprem tatbikatı ile ilgili bilgilendirici videolar bulunmaktadır.</Text>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>
          navigation.navigate("TatbikatTest")
        }>
        <View style = {styles.ListItem}>
          <View style = {styles.info}>
            <Text style ={styles.textItem}>Deprem Tatbikatı Test</Text>
            <View style = {styles.imageContainer}>
              <Image
                source={require('../assets/test.png')}
                style={styles.image}
              />
            </View>
          </View>
          <View style = {styles.textView}>
              <Text style = {[styles.textFont, {padding:10}]}>Depreme hazır mısın haydi gel bunu ölçelim.</Text>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>
          navigation.navigate("DepremCantasi")
        }>
        <View style = {styles.ListItem}>
          <View style = {styles.info}>
            <Text style ={styles.textItem}>Deprem Çantası</Text>
            <View style = {styles.imageContainer}>
              <Image
                source={require('../assets/backpack.png')}
                style={styles.image}
              />
            </View>
          </View>
          <View style = {styles.textView}>
              <Text style = {styles.textFont}>Deprem çantasında neler bulunmalıdır biliyor musun?</Text>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>
          navigation.navigate("TatbikatOnlem")
        }>
        <View style = {styles.ListItem}>
          <View style = {styles.info}>
            <Text style ={styles.textItem}>Depreme Nasıl Önlem Alırım</Text>
            <View style = {styles.imageContainer}>
              <Image
                source={require('../assets/info.png')}
                style={{width:30,height:30}}
              />
            </View>
          </View>
          <View style = {styles.textView}>
              <Text style = {styles.textFont}>Deprem sana gelmeden sen depreme git önlemini alacağını öğren.</Text>
          </View>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default function Tatbikat() {

  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      // Üst seviye action bar'ı gizlemek için ayarları değiştirin
      navigation.getParent()?.setOptions({ headerShown: false });
    }, [navigation])
  );
  
  return (
    <TatbikatStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#fb7f01' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }}>
      <TatbikatStack.Screen name="TatbikatMain" component={TatbikatMain} options={{ headerShown: false }} />
      <TatbikatStack.Screen name="TatbikatVideo" component={TatbikatVideo} options={{ title: 'Tatbikat Videoları' }}/>
      <TatbikatStack.Screen name="TatbikatTest" component={TatbikatTest} options={{ title: 'Tatbikat Testi' }}/>
      <TatbikatStack.Screen name="DepremCantasi" component={DepremCantasi} options={{ title: 'Deprem Çantası' }}/>
      <TatbikatStack.Screen name="TatbikatOnlem" component={TatbikatOnlem} options={{ title: 'Depreme Nasıl Önlem Alırım' }}/>
    </TatbikatStack.Navigator>
  );
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor : "#e2f8ff",
    borderWidth:0,
  },
  textItem: {
      fontSize : 20,
      fontWeight:"700",
      color : "black",
      fontFamily:"sans-serif",
      color: "#fb7f01"
  },
  info :{
    flexDirection:"row",
    borderColor: "red",
    borderWidth:0,
    alignSelf:"center",
    alignItems:"center",
    marginVertical:10,
    justifyContent:"center"
  },
  ListItem:{
    flexDirection:"column", 
    backgroundColor:"#fff0e1",
    marginTop:10, 
    marginBottom:20,
    borderRadius:10,
    borderColor:"purple", 
    width:360,
    height:120,
    borderWidth:0,
  },
  image: {
    width: 35,
    height: 35,
  },
  imageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:0,
    marginLeft:10,
  },
  textView:{
    textAlign:"center",
    borderWidth:0,
    flex:1,
    backgroundColor:"white",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    justifyContent:"center",
  },
  textFont:{
    fontSize:18,
    fontWeight:"500",
    color:"black",
    textAlign:"center",
  }
})