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

export default function DepremCantasi() {
  return (
  <ScrollView style = {styles.main}>
    <View style = {[styles.main, {alignItems:"center"}]}>
        <View style = {styles.imageContainer}>
                <Image
                  resizeMode='contain'
                  source={require('../tatbikatAssets/deprem_cantasi.jpg')}
                  style={[styles.image]}
                />
        </View>
        <View style = {[styles.textView, {backgroundColor:"#e2f8ff",flex:0, marginBottom:10}]}>
            <Text style = {[styles.textFont, {fontWeight:800, fontSize:20}]}>Deprem Çantasında Neler Olmalı ?</Text>
        </View>
        <ListItem title="Gıda" description={`Yüksek kalorili, vitamin ve karbonhidrat içeren, su kaybını önleyen ve dayanıklı (çabuk bozulmayan) gıdalar (Konserve, kuru meyveler, tahin–pekmez, meyve suyu, vb.).`} />
        <ListItem height={{height:190}} title="Önemli belge fotokopileri" 
        description={`\u2022 Kimlik kartları (nüfus cüzdanı, ehliyet vb.)
        \u2022 Tapu, sigorta, ruhsat belgeleri
        \u2022 Zorunlu Deprem Poliçesi \u2022 Diplomalar
        \u2022 Pasaport, banka cüzdanı vb.
        \u2022 Diğer (evcil hayvan sağlık karnesi, vb.)`} />
        <ListItem title="Giyecekler" description={`\u2022 İç çamaşırı\n\u2022 Çorap\n\u2022 Yağmurluk\n\u2022 İklime uygun giysiler\n`} />
        <ListItem title="Su" description="Ailedeki her bir üye için 3 günlük su (kişi başı 4 litre)," height={{height:120}}/>
        <ListItem height={{height:180}}title="Hijyen Malzemeleri" description={`\u2022 Sabun ve Dezenfektanlar\n\u2022 Diş fırçası ve macunu\n\u2022 Islak mendil\n\u2022 Hijyenik ped\n\u2022 Tuvalet kâğıdı`}/>
        <ListItem height={{height:230}} title="Diğer Malzemeleri" description={`\u2022 İlk yardım çantası\n\u2022 Toz maskesi\n\u2022 Uyku tulumu veya battaniye\n\u2022 Çakı, düdük, küçük makas\n\u2022 Kâğıt, kalem\n\u2022 Pilli radyo, el feneri ve yedek piller (dayanıklı/uzun ömürlü pil seçilmeli)\n\u2022 Kerpeten, İngiliz anahtarı ve tornavida`}/>
        <ListItem height={{height:190}} title="Bebekli Aile" description={`\u2022 Bebek için ilaç, vitamin ve mineraller\n\u2022 Hazır mama (anne sütünün olmadığı ya da yetmediği durumlar için)\n\u2022 Bebek bezi ve ıslak mendil\n\u2022 Oyuncak\n\u2022 Bebek battaniyesi ve kıyafet\n`}/>
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
    marginTop:10, 
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
    padding:10,
    fontSize:16,
    fontWeight:"500",
    color:"black",
    textAlign:"center",
  }
})