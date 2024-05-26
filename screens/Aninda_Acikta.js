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

export default function Aninda_Acikta() {
  return (
  <ScrollView style = {styles.main}>
    <View style = {[styles.main, {alignItems:"center"}]}>
        <View style = {styles.imageContainer}>
                <Image
                  resizeMode='cover'
                  source={require('../tatbikatAssets/acik_alan.webp')}
                  style={[styles.image]}
                />
        </View>
        <ListItem height={{height:475}} title="Bilgi Kutucuğu-1" description={`\u2022 Enerji hatları ve direklerinden, ağaçlardan, diğer binalardan ve duvar diplerinden uzaklaşılmalıdır. Açık arazide çömelerek etraftan gelen tehlikelere karşı hazırlıklı olunmalıdır.\n\n\u2022 Toprak kayması olabilecek, taş veya kaya düşebilecek yamaç altlarında bulunulmamalıdır. Böyle bir ortamda bulunuluyorsa seri şekilde güvenli bir ortama geçilmelidir.\n\n\u2022 Binalardan düşebilecek baca, cam kırıkları ve sıvalara karşı tedbirli olunmalıdır.\n\n\u2022 Toprak altındaki kanalizasyon, elektrik ve gaz hatlarından gelecek tehlikelere karşı dikkatli olunmalıdır.\n\n\u2022 Deniz kıyısından uzaklaşılmalıdır\n\n`} />
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
    marginTop:40, 
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
    marginTop:20,
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