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

export default function Binada() {
  return (
  <ScrollView style = {styles.main}>
    <View style = {[styles.main, {alignItems:"center"}]}>
        <View style = {styles.imageContainer}>
                <Image
                  resizeMode='cover'
                  source={require('../tatbikatAssets/aninda.webp')}
                  style={[styles.image]}
                />
        </View>
        <View style = {[styles.textView, {backgroundColor:"#e2f8ff",flex:0, marginBottom:10}]}>
            <Text style = {[styles.textFont, {fontWeight:800, fontSize:20}]}>Kesinlikle Panik Yapılmamalıdır.</Text>
        </View>
        <ListItem height={{height:475}} title="Bilgi Kutucuğu-1" description={`\u2022 Sabitlenmemiş dolap, raf, pencere vb. eşyalardan uzak durulmalıdır.\n\n\u2022 Varsa sağlam sandalyelerle desteklenmiş masa altına veya dolgun ve hacimli koltuk, kanepe, içi dolu sandık gibi koruma sağlayabilecek eşya yanına çömelerek hayat üçgeni oluşturulmalıdır.\n\n\u2022 Baş iki el arasına alınarak veya bir koruyucu (yastık, kitap vb) malzeme ile korunmalıdır. Sarsıntı geçene kadar bu pozisyonda beklenmelidir.\n\n\u2022 Güvenli bir yer bulup, diz üstü ÇÖK, Başını ve enseni koruyacak şekilde KAPAN, Düşmemek için sabit bir yere TUTUN\n\n\u2022 Merdivenlere ya da çıkışlara doğru koşulmamalıdır.\n\n`} />
        <ListItem height={{height:300}} title="Bilgi Kutucuğu-2" description={`\u2022 Balkona çıkılmamalıdır.\n\n\u2022 Balkonlardan ya da pencerelerden aşağıya atlanmamalıdır.\n\n\u2022 Kesinlikle asansör kullanılmamalıdır.\n\n\u2022 Telefonlar acil durum ve yangınları bildirmek dışında kullanılmamalıdır.\n\n\u2022 Kibrit, çakmak yakılmamalı, elektrik düğmelerine dokunulmamalıdır.\n`} />
        <ListItem height={{height:550}} title="Bilgi Kutucuğu-3" description={`\u2022 Tekerlekli sandalyede isek tekerlekler kilitlenerek baş ve boyun korumaya alınmalıdır.\n\n\u2022 Mutfak, imalathane, laboratuvar gibi iş aletlerinin bulunduğu yerlerde; ocak, fırın ve bu gibi cihazlar kapatılmalı, dökülebilecek malzeme ve maddelerden uzaklaşılmalıdır.\n\n\u2022 Sarsıntı geçtikten sonra elektrik, gaz ve su vanalarını kapatılmalı, soba ve ısıtıcılar söndürülmelidir.\n\n\u2022 Diğer güvenlik önlemleri alınarak gerekli olan eşya ve malzemeler alınarak bina daha önce tespit edilen yoldan derhal terk edilip toplanma bölgesine gidilmelidir.\n\n\u2022 Okulda sınıfta ya da büroda ise sağlam sıra, masa altlarında veya yanında; koridorda ise duvarın yanına hayat üçgeni oluşturacak şekilde ÇÖK-KAPAN-TUTUN hareketi ile baş ve boyun korunmalıdır.\n\n\u2022 Pencerelerden ve camdan yapılmış eşyalardan uzak durulmalıdır.\n`} />
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