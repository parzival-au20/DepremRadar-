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

export default function KapaliAlan() {
  return (
  <ScrollView style = {styles.main}>
    <View style = {[styles.main, {alignItems:"center"}]}>
        <View style = {styles.imageContainer}>
                <Image
                  resizeMode='cover'
                  source={require('../tatbikatAssets/sonrasi.webp')}
                  style={[styles.image]}
                />
        </View>
        <ListItem height={{height:325}} title="Bilgi Kutucuğu-1" description={`\u2022 Önce kendi emniyetinizden emin olun. \n\n\u2022 Sonra çevrenizde yardım edebileceğiniz kimse olup olmadığını kontrol edin. \n\n\u2022 Depremlerden sonra çıkan yangınlar oldukça sık görülen ikincil afetlerdir. Bu nedenle eğer gaz kokusu alırsanız, gaz vanasını kapatın. Camları ve kapıları açın. Hemen binayı terk edin. \n\n\u2022 Dökülen tehlikeli maddeleri temizleyin. \n\n`} />
        <ListItem height={{height:450}} title="Bilgi Kutucuğu-2" description={`\u2022 Yerinden oynayan telefon ahizelerini telefonun üstüne koyun. \n\n\u2022 Acil durum çantanızı yanınıza alın, mahalle buluşma noktanıza doğru harekete geçin. \n\n\u2022 Radyo ve televizyon gibi kitle iletişim araçlarıyla size yapılacak uyarıları dinleyin. \n\n\u2022 Cadde ve sokakları  acil yardım araçları için boş bırakın. \n\n\u2022 Her büyük depremden sonra mutlaka artçı depremler olur. Artçı depremler zaman içerisinde seyrekleşir ve büyüklükleri azalır. Artçı depremler hasarlı binalarda zarara yol açabilir. Bu nedenle sarsıntılar tamamen bitene kadar hasarlı binalara girilmemelidir. Artçı depremler sırasında da ana depremde yapılması gerekenler yapılmalıdır. \n\n`} />
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