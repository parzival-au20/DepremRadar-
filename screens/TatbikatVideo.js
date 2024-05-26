import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import VideoLayout from "./VideoLayout";


const OnlemStack  = createNativeStackNavigator();

const ListItem = ({title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.ListItem]}>
      <View style={styles.info}>
        <Text style={styles.textItem}>{title}</Text>
      </View>
      <View style = {styles.imageContainer}>
          <Image
            source={require('../assets/play.png')}
            style={styles.image}
          />
      </View>
    </View>
  </TouchableOpacity>
    
);


function TatbikatVideoMain() {

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

  const videos = [
    { title: "Engelli Vatandaşlarımız Afetlere Nasıl Hazırlanabilir?", url: 'https://www.youtube.com/embed/mgsZC5XLwHQ?si=13aB0EyuHEtcOPD9' },
    { title: "Evinizi ve Kendinizi Güvene Alın!", url: 'https://www.youtube.com/embed/brSdfPnN0tg?si=wwLhSOri_hJYYw7w' },
    { title: "DEPREM SONRASI İLK 6 SAAT HAYATİ ÖNEMDEDİR!", url: 'https://www.youtube.com/embed/xJ5tO8S2uzE?si=g3TLshrUJpFeZCz8' },
    { title: "Deprem Olmadan, Biz Hazır Olalım", url: 'https://www.youtube.com/embed/8ckk-o1QkWw?si=AWPzDBivC_2S3-BJ' },
    { title: "Deprem Anında Doğru Davranışlar", url: 'https://www.youtube.com/embed/I_reIHQrcNY?si=KKtQtSo0rYx_uhZW' },
    { title: "Bir deprem anında yapılması gerekenleri biliyor musunuz?", url: 'https://www.youtube.com/embed/oZeI0X40EEY?si=qdl87c6I2XNZQFqx' },
    { title: "Japonya'dan Kahramanmaraş dersleri: Japonlar depreme nasıl hazırlanıyor?", url: 'https://www.youtube.com/embed/WapaOFFWee0?si=w2YfHcDyPs7lvPcI' },
    { title: "Güven Ailesi ile Görevimiz Deprem", url: 'https://www.youtube.com/embed/G1sHBXX88GI?si=q5ANzh9-UIWYRUIX' },
    { title: "Afet ve Acil Durum Çantası Nasıl Hazırlanır?", url: 'https://www.youtube.com/embed/K0keerAalYE?si=o8b2czb5EPDwC-nn' },
    { title: "Depremde Ne Yapmalıyız / Deprem Öncesi Anı ve Sonrası Yapılması Gerekenler", url: 'https://www.youtube.com/embed/zG9CG2BK4BU?si=xL33pvF5gwUoIoWN' },
  ];

  return (
    <ScrollView style = {styles.main}>
       <View style = {[styles.main, {alignItems:"center"}]}>
       {videos.map((video, index) => (
          <ListItem
            key={index}
            title={video.title}
            onPress={() => navigation.navigate("VideoLayout", { url: video.url })}
          />
        ))}
    </View>
    </ScrollView>
  )
}

export default function TatbikatVideo() {

  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      // Üst seviye action bar'ı gizlemek için ayarları değiştirin
      navigation.getParent()?.setOptions({ headerShown: false });
    }, [navigation])
  );
  
  return (
    <OnlemStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#fb7f01' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }}>
      <OnlemStack.Screen name="TatbikatVideoMain" component={TatbikatVideoMain} options={{ headerShown: false }} />
      <OnlemStack.Screen name="VideoLayout" component={VideoLayout} options={{ title: 'Tatbikat Videoları' }}/>
    </OnlemStack.Navigator>
  )
}
const styles = StyleSheet.create({
  main:{
    flex: 1,
    flexDirection: 'column',
    //alignItems: 'center',
    backgroundColor : "#e2f8ff",
    borderWidth:0,
    //justifyContent:"center"
  },
  info :{
    flex:1,
    flexDirection:"row",
    borderColor: "black",
    borderWidth:0,
    justifyContent:"center",
    height:"100%",
    paddingHorizontal:10,
  },
  textItem: {
      fontSize : 18,
      fontWeight:"700",
      textAlign:"center",
      alignSelf:"center",
      color : "white",
      fontFamily:"sans-serif",
  },
  ListItem:{
    flexDirection:"row", 
    backgroundColor:"#fb7f01",
    marginTop:10, 
    marginBottom:20,
    borderRadius:10,
    borderColor:"purple", 
    width:370,
    height:80,
    borderWidth:0,
    justifyContent:"center",
  },
  image: {
    width: 30,
    height: 30,
  },
  imageContainer:{
    justifyContent: 'center',
    //alignItems: 'center',
    width:50,
    borderWidth:0,
  },
})