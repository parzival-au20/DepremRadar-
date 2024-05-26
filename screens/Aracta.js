import { StyleSheet, Text, View, Image, Platform, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const ListItem = ({ title, description, height }) => (
  <View style={[styles.ListItem,height]}>
    <View style={styles.info}>
      <Text style={styles.textItem}>{title}</Text>
    </View>
    <View style={styles.textView}>
      <Text style={styles.textFont}>{description}</Text>
    </View>
  </View>
);

export default function Aracta() {
  return (
  <ScrollView style = {styles.main}>
    <View style = {[styles.main, {alignItems:"center"}]}>
        <View style = {styles.imageContainer}>
                <Image
                  resizeMode='contain'
                  source={require('../tatbikatAssets/aracta.png')}
                  style={[styles.image]}
                />
        </View>
        <ListItem height={{height:375}} title="Bilgi Kutucuğu-1" description={`\u2022 Sarsıntı sırasında karayolunda seyir halindeyseniz; \n\n\u2022 Bulunduğunuz yer güvenli ise; yolu kapatmadan sağa yanaşıp durulmalıdır. Kontak anahtarı yerinde bırakılıp, pencereler kapalı olarak araç içerisinde beklenmelidir. Sarsıntı durduktan sonra açık alanlara gidilmelidir. \n\n\u2022 Araç meskun mahallerde ya da güvenli bir yerde değilse (ağaç ya da enerji hatları veya direklerinin yanında, köprü üstünde vb.); durdurulmalı, kontak anahtarı üzerinde bırakılarak terk edilmeli ve trafikten uzak açık alanlara gidilmelidir. \n\n`} />
    </View>
  </ScrollView>)
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    flexDirection: 'column',
    //alignItems: 'center',
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
    marginTop:0, 
    marginBottom:20,
    borderRadius:10,
    borderColor:"purple", 
    width:360,
    height:150,
    borderWidth:0,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 400,
  },
  imageContainer:{
    borderWidth:2,
    borderColor:"black",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:0,
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
    padding:10,
    fontSize:16,
    fontWeight:"500",
    color:"black",
  }
})