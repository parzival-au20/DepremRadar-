import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import TestLayout from "./TestLayout";


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


function TatbikatTestMain() {

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

  const sorular = [
    { title: "SORU 1", soru: 'Metroda yolculuk sırasında depreme yakalanırsak nasıl davranmalıyız ?', 
        cevap_A:"Ayaktaysanız trenin gittiği yöne yüzünüzü dönün, otuyorsanız bir elinizle tutunup bir elinizle başınızı koruyun.", 
        cevap_B:"Acil durum çıkışını kullanarak metroyu hızlıca terk edin.", dogru_cevap:"A" },
    { title: "SORU 2", soru: 'Açık alanda depreme yakalanıldığında hangisi yapılmalıdır ?', 
        cevap_A:"Bina ve duvar diplerinden uzaklaşarak açık alanlara yönelmek.", cevap_B:"Elektrik direklerine tutunmak.", dogru_cevap:"A" },
    { title: "SORU 3", soru: 'Depreme benzin istasyonunda yakalanırsak ne yapmalıyız ?', 
        cevap_A:"Benzin istasyonlarından aracınızla hızla uzaklaşmalısınız.", 
        cevap_B:"Güvenli ve çelik yapılar olan benzin istasyonlarında yetkililerden bilgi beklenmelidir.", dogru_cevap:"B" },
    { title: "SORU 4", soru: 'Depreme otomobilde yakalanırsak ne yapmalıyız ?', cevap_A:"Aracınızı kapalı alanlara sürün.", 
        cevap_B:"Depremden sonra aracın kontak anahtarını üzerinde bırakarak terk edin, açık alanlara yönelin.", dogru_cevap:"B" },
    { title: "SORU 5", soru: 'Depreme asansörde yakalanırsak ne yapmalıyız ?', cevap_A:"Asansörde depremin bitmesini bekleyin.", 
        cevap_B:"En yakın katta asansörden çıkın ve güvenliyse binayı terk edin.", dogru_cevap:"B" },
    { title: "SORU 6", soru: 'Deprem sonrasında güvenlik için hangisi yapılmalıdır ?', 
        cevap_A:"Sarsıntı geçtikten sonra elektrik, gaz ve su vanaları kapatılmalıdır.", 
        cevap_B:"Elektrik ve gaz vanalarını açık bırakıp, ışıkları kontrol etmek.", dogru_cevap:"A" },
    { title: "SORU 7", soru: 'Deprem anında binada ne yapılmamalıdır ?', cevap_A:"Sabitlenmemiş eşyalardan uzak durulmalıdır.", 
        cevap_B:"Merdivenlere ya da çıkışlara doğru koşulmalıdır.", dogru_cevap:"A" },
    { title: "SORU 8", soru: 'Ailedeki her bir üye içindeprem çantasında ne kadar su bulundurulmalıdır ?', 
        cevap_A:"Kişi başı 4 litre su.", cevap_B:"Kişi başı 1 litre su.", dogru_cevap:"A" },
    { title: "SORU 9", soru: 'Deprem sonrası hasarlı binalar hakkında ne yapılmalıdır ?',
        cevap_A:"Hasarlı binalara girip önemli eşyaları toplamak.", 
        cevap_B:"Hasarlı binalara girilmemeli, artçı depremler tamamen bitene kadar beklenmelidir.", dogru_cevap:"B" },
    { title: "SORU 10", soru: 'Deprem sonrası acil çıkış kapıları nasıl olmalıdır ?', 
        cevap_A:"Acil çıkış kapıları içe doğru açılmalı ve sıkı şekilde kilitlenmelidir.", 
        cevap_B:"Dışa doğru açılan kapılar kullanılmalı, acil çıkış kapıları kilitli olmamalıdır.", dogru_cevap:"B" },
  ];

  return (
    <ScrollView style = {styles.main}>
       <View style = {[styles.main, {alignItems:"center", marginTop:40, marginBottom:30}]}>
       {sorular.map((soru, index) => (
          <ListItem
            key={index}
            title={soru.title}
            onPress={() => navigation.navigate("TestLayout", { soru:soru.soru, cevap_A:soru.cevap_A, cevap_B:soru.cevap_B, dogru_cevap:soru.dogru_cevap })}
          />
        ))}
    </View>
    </ScrollView>
  )
}

export default function TatbikatTest() {

  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      // Üst seviye action bar'ı gizlemek için ayarları değiştirin
      navigation.getParent()?.setOptions({ headerShown: false });
    }, [navigation])
  );
  
  return (
    <OnlemStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#fb7f01' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }}>
      <OnlemStack.Screen name="TatbikatTestMain" component={TatbikatTestMain} options={{ headerShown: false }} />
      <OnlemStack.Screen name="TestLayout" component={TestLayout} options={{ title: 'Tatbikat Testleri' }}/>
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