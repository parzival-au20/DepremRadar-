import { StyleSheet, Text, View, Image, Platform, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRulerVertical,faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ResourceModal from '../components/ResourceModal';
import TimeModal from '../components/TimeModal';
import { useResultsContext } from '../hooks/useResults';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Gizlilik from './Gizlilik';

const OnlemStack  = createNativeStackNavigator();


function TercihlerMain() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalTimeIsVisible, setModalTimeIsVisible] = useState(false);
  const {selectedResource, setSelectedResource, selectedTime, setSelectedTime, searchApi } = useResultsContext();
  //const [selectedResource, setSelectedResource] = useState('kandilli');
  //const [selectedTime, setSelectedTime] = useState("24");

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

  // AsyncStorage anahtarları
  const RESOURCE_KEY = 'selectedResource';
  const TIME_KEY = 'selectedTime';

  useEffect(() => {
    if (selectedResource && selectedTime) {
      searchApi(selectedResource, selectedTime);
    }

    const savePreferences = async () => {
      try {
        await AsyncStorage.setItem(RESOURCE_KEY, selectedResource);
        await AsyncStorage.setItem(TIME_KEY, selectedTime);
      } catch (error) {
        console.error("Failed to save preferences.", error);
      }
    };

    savePreferences();
  }, [selectedResource, selectedTime]);

  const startModal = () => {
      setModalIsVisible(true);
  };
  const endModal = () => {
      setModalIsVisible(false);
  };
  const startModalTime = () => {
      setModalTimeIsVisible(true);
  };
  const endModalTime = () => {
      setModalTimeIsVisible(false);
  };
  const selectResource = async (resource) => {
      await AsyncStorage.setItem(RESOURCE_KEY, resource);
      setSelectedResource(resource);
      endModal();
  };
  const selectTime = async (time) => {
      await AsyncStorage.setItem(TIME_KEY, time);
      setSelectedTime(time);
      endModalTime();
  };

  let blankColor = "#009247"; // Varsayılan renk
  let textColor = "#009247";
  let magBlockColor = "#ebfff4";
  return (
    <View style = {styles.main}>
      <View style = {styles.title}>
        <Text style = {styles.titleFont}>ANASAYFA TERCİHLERİ</Text>
      </View>
      <TouchableOpacity onPress={startModal}>
        <View style = {styles.ListItem}>
          <View style = {styles.imageContainer}>
            <Image
              source={require('../assets/form.png')}
              style={styles.image}
            />
          </View>
          <View style = {styles.info}>
            <Text style ={styles.textItem}>Deprem Veri Kaynağı</Text>
          </View>
          <View style={styles.sendIconView}>
              <FontAwesomeIcon icon={faAngleRight} size={50} color='gray' style={styles.sendIcon}/>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style = {styles.ListItem}>
          <View style = {styles.imageContainer}>
            <Image
              source={require('../assets/yildirim.png')}
              style={styles.image}
            />
          </View>
          <View style = {styles.info}>
            <Text style ={styles.textItem}>Deprem Şiddeti</Text>
          </View>
          <View style={styles.sendIconView}>
              <FontAwesomeIcon icon={faAngleRight} size={50} color='gray' style={styles.sendIcon}/>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={startModalTime}>
        <View style = {styles.ListItem}>
          <View style = {styles.imageContainer}>
              <AntDesign name="clockcircle" size={40} color="gray" style={{marginLeft:0 }}/>
          </View>
          <View style = {styles.info}>
            <Text style ={styles.textItem}>Zaman</Text>
          </View>
          <View style={styles.sendIconView}>
              <FontAwesomeIcon icon={faAngleRight} size={50} color='gray' style={styles.sendIcon}/>
          </View>
      </View>
      </TouchableOpacity>
      
      <ResourceModal visible={modalIsVisible} onSelectResource={selectResource}></ResourceModal>
      <TimeModal visible={modalTimeIsVisible} onSelectTime={selectTime}></TimeModal>

      <View style = {[styles.title, {marginTop:10}]}>
        <Text style = {styles.titleFont}>DİĞER</Text>
      </View>
      <TouchableOpacity 
              onPress={()=>
                navigation.navigate("Gizlilik")}>
        <View style = {styles.ListItem}>
          <View style = {styles.imageContainer}>
            <Image
              source={require('../assets/earth.png')}
              style={styles.image}
            />
          </View>
          <View style = {styles.info}>
            <Text style ={styles.textItem}>Gizlilik</Text>
          </View>
          <View style={styles.sendIconView}>
              <FontAwesomeIcon icon={faAngleRight} size={50} color='gray' style={styles.sendIcon}/>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style = {styles.ListItem}>
          <View style = {styles.imageContainer}>
            <Image
              source={require('../assets/star.png')}
              style={styles.image}
            />
          </View>
          <View style = {styles.info}>
            <Text style ={styles.textItem}>Uygulamaya Destek Ol</Text>
          </View>
          <View style={styles.sendIconView}>
              <FontAwesomeIcon icon={faAngleRight} size={50} color='gray' style={styles.sendIcon}/>
          </View>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default function Tercihler() {

  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      // Üst seviye action bar'ı gizlemek için ayarları değiştirin
      navigation.getParent()?.setOptions({ headerShown: false });
    }, [navigation])
  );
  
  return (
    <OnlemStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#009247' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }}>
      <OnlemStack.Screen name="TercihlerMain" component={TercihlerMain} options={{ headerShown: false }} />
      <OnlemStack.Screen name="Gizlilik" component={Gizlilik} options={{ title: 'Gizlilik İlkeleri' }}/>
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
    },
    textItem: {
        fontSize : 22,
        fontWeight:"700",
        color : "black",
        fontFamily:"sans-serif",
    },
    info :{
      backgroundColor: "white",
      borderColor: "red",
      borderWidth:0,
      marginLeft:10,
      justifyContent :"center"
  },
  ListItem:{
    flexDirection:"row", 
    backgroundColor:"white",
    marginTop:10, 
    marginBottom:10,
    borderRadius:10,
    borderColor:"purple", 
    width:360,
    height:85,
    borderWidth:0,
  },
  sendIconView : {
      justifyContent: "center",
      borderColor: "black",
      borderWidth:0,
      alignItems:"flex-end",
      flex:1,
  },
  image: {
    width: 45,
    height: 45,
  },
  imageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:0,
    marginLeft:10,
  },
  title:{
    alignSelf: 'flex-start',
    marginTop:30,
    marginStart:20,
  },
  titleFont:{
    fontSize:18,
    fontWeight:"900",
    color:"#31363F"
  }
})