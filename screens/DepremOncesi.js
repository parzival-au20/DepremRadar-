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

export default function DepremOncesi() {
  return (
  <ScrollView style = {styles.main}>
    <View style = {[styles.main, {alignItems:"center"}]}>
        <View style = {styles.imageContainer}>
                <Image
                  resizeMode='cover'
                  source={require('../tatbikatAssets/once1.jpg')}
                  style={[styles.image]}
                />
        </View>
        <View style = {[styles.textView, {backgroundColor:"#fb7f01",flex:0, marginBottom:10, marginTop:10, borderTopLeftRadius:10, borderTopRightRadius:10}]}>
            <Text style = {[styles.textFont, {fontWeight:800, fontSize:20}]}>Kesinlikle Panik Yapılmamalıdır.</Text>
        </View>
        <ListItem height={{height:475}} title="Bilgi Kutucuğu-1" description={`\u2022 Yerleşim bölgeleri titizlikle belirlenmelidir. Kaygan ve ovalık bölgeler iskana açılmamalıdır. Konutlar gevşek toprağa sahip meyilli arazilere yapılmamalıdır. \n\n\u2022 Yapılar deprem etkilerine karşı dayanıklı inşa edilmelidir. (Yapı Tekniğine ve İnşaat Yönetmeliğine uygun olarak) \n\n\u2022 İmar planında konuta ayrılmış yerler dışındaki yerlere ev ve bina yapılmamalıdır. \n\n\u2022 Dik yarların yakınına, dik boğaz ve vadilerin içine bina yapılmamalıdır. \n\n\u2022 Çok kar yağan ve çığ gelen yamaçlarda bina yapılmamalıdır. \n\n\u2022 Mevcut binaların dayanıklılıkları artırılmalıdır. \n\n\u2022 Konutlara deprem sigortası yaptırılmalıdır. \n\n`} />
        <View style = {styles.imageContainer}>
                <Image
                  resizeMode='contain'
                  source={require('../tatbikatAssets/once2.jpg')}
                  style={[styles.image, {height:250}]}
                />
        </View>
        <ListItem height={{height:500}} title="Bilgi Kutucuğu-2" description={`\u2022 Dolap üzerine konulan eşya ve büro malzemeleri kayarak düşmelerini önlemek için plastik tutucu malzeme veya yapıştırıcılarla sabitlenmelidir.\n\n\u2022 Soba ve diğer ısıtıcılar sağlam malzemelerle duvara veya yere sabitlenmelidir.\n\n\u2022 Dolaplar ve devrilebilecek benzeri eşyalar birbirine ve duvara sabitlenmelidir. Eğer sabitlenen eşya ve duvar arasında boşluk kalıyorsa, çarpma etkisini düşürmek için araya bir dolgu malzemesi konulmalıdır.\n\n\u2022 Tavan ve duvara asılan avize, klima vb. cihazlar bulundukları yere ağırlıklarını taşıyacak şekilde, duvar ve pencerelerden yeterince uzağa ve kanca ile asılmalıdır.\n\n\u2022 İçinde ağır eşyalar bulunan dolap kapakları mekanik kilitler takılarak sıkıca kapalı kalmaları sağlanmalı.\n\n`} />
        <View style = {styles.imageContainer}>
                <Image
                  resizeMode='cover'
                  source={require('../tatbikatAssets/once3.jpg')}
                  style={[styles.image]}
                />
        </View>
        <ListItem height={{height:500}} title="Bilgi Kutucuğu-3" description={`\u2022 Tezgah üzerindeki kayabilecek beyaz eşyaların altına metal profil koyarak bunların kayması önlenmelidir. \n\n\u2022 Zehirli, patlayıcı, yanıcı maddeler düşmeyecek bir konumda sabitlenmeli ve kırılmayacak bir şekilde depolanmalıdır. Bu maddelerin üzerlerine fosforlu, belirleyici etiketler konulmalıdır. \n\n\u2022 Rafların önüne elastik bant ya da tel eklenebilir. Küçük nesneler ve şişeler, birbirlerine çarpmayacak ve devrilmeyecek şekilde, kutuların içine yerleştirilmelidir. \n\n\u2022 Gaz kaçağı ve yangına karşı, gaz vanası ve elektrik sigortaları otomatik hale getirilmelidir. \n\n\u2022 Binadan acilen çıkmak için kullanılacak yollardaki tehlikeler ortadan kaldırılmalı, bu yollar işaretlenmeli, çıkışı engelleyebilecek eşyalar çıkış yolu üzerinden kaldırılmalıdır. \n\n`} />
        <View style = {styles.imageContainer}>
                <Image
                  resizeMode='cover'
                  source={require('../tatbikatAssets/once4.jpg')}
                  style={[styles.image]}
                />
        </View>
        <ListItem height={{height:640}} title="Bilgi Kutucuğu-4" description={`\u2022 Geniş çıkış yolları oluşturulmalıdır. Dışa doğru açılan kapılar kullanılmalı, acil çıkış kapıları kilitli olmamalıdır. Acil çıkışlar aydınlatılmalıdır. \n\n\u2022 Karyolalar pencerenin ve üzerine devrilebilecek ağır dolapların yanına konulmamalı, karyolanın üzerinde ağır eşya olan raf bulundurulmamalıdır. \n\n\u2022 Tüm bireylerin katılımı ile (evde, iş yerinde, apartmanda, okulda) “Afete hazırlık planları” yapılmalı, her altı ayda bir bu plan gözden geçirilmelidir. Zaman zaman bu plana göre nasıl davranılması gerektiğinin tatbikatları yapılmalıdır. \n\n\u2022 Bir afet ve acil durumda eve ulaşılamayacak durumlar için aile bireyleri ile iletişimin nasıl sağlanacağı, alternatif buluşma yerleri ve bireylerin ulaşabileceği bölge dışı bağlantı kişisi (ev, işyeri, okul içinde, dışında ve ya mahalle dışında) belirlenmelidir. \n\n\u2022 Önemli evraklar (kimlik kartları, tapu, sigorta belgeleri, sağlık karnesi, diplomalar, pasaport, banka cüzdanı vb.) kopyaları hazırlanarak su geçirmeyecek bir şekilde saklanmalı, ayrıca bu evrakların bir örneği de bölge dışı bağlantı kişisinde bulunmalıdır. \n\n`} />
        <View style = {styles.imageContainer}>
                <Image
                  resizeMode='cover'
                  source={require('../tatbikatAssets/once5.png')}
                  style={[styles.image]}
                />
        </View>
        <ListItem height={{height:450}} title="Bilgi Kutucuğu-5" description={`\u2022 Bina yönetimince önceden belirlenen, mesken veya iş yerinin özelliği ve büyüklüğüne göre uygun yangın söndürme cihazı mutlaka bulundurulmalı ve periyodik bakımları da yaptırılmalıdır. Bu cihazlar; \n\n\u2022 Kolayca ulaşılabilecek bir yerde tutulmalıdır. \n\n\u2022 Yeri herkes tarafından bilinmelidir. \n\n\u2022 Duvara sıkıca sabitlenmelidir. \n\n\u2022 Her yıl ilgili firma tarafından bakımı yapılmalıdır. \n\n\u2022 Bir kez kullanıldıktan sonra mutlaka tekrar doldurulmalıdır. \n\n\u2022 Binalarda asansörlerin kapı yanlarına "Deprem Sırasında Kullanılmaz" levhası asılmalıdır. \n\n`} />
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