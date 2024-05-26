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

export default function Enkazda() {
  return (
  <ScrollView style = {styles.main}>
    <View style = {[styles.main, {alignItems:"center"}]}>
        <View style = {styles.imageContainer}>
                <Image
                  resizeMode='cover'
                  source={require('../tatbikatAssets/enkazda1.webp')}
                  style={[styles.image]}
                />
        </View>
        <ListItem height={{height:425}} title="Bilgi Kutucuğu-1" description={`\u2022 Paniklemeden durumunuzu kontrol edin.\n\n\u2022 Hareket kabiliyetiniz kısıtlanmışsa çıkış için hayatınızı riske atacak hareketlere kalkışmayın. Biliniz ki kurtarma ekipleri en kısa zamanda size ulaşmak için çaba gösterecektir.\n\n\u2022 Enerjinizi en tasarruflu şekilde kullanmak için hareketlerinizi kontrol altında tutun.\n\n\u2022 El ve ayaklarınızı kullanabiliyorsanız su, kalorifer, gaz tesisatlarına, zemine vurmak suretiyle varlığınızı duyurmaya çalışın.\n\n\u2022 Sesinizi kullanabiliyorsanız kurtarma ekiplerinin seslerini duymaya ve onlara seslenmeye çalışınız. Ancak enerjinizi kontrollü kullanın.\n\n`} />
        
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
    marginTop:20, 
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
    marginTop:20,
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