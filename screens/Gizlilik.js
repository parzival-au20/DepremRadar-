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

export default function Gizlilik() {
  return (
  <ScrollView style = {styles.main}>
    <View style = {[styles.main, {alignItems:"center"}]}>
        <View style = {styles.imageContainer}>
                <Image
                  resizeMode='contain'
                  source={require('../assets/app_icon.jpg')}
                  style={[styles.image]}
                />
        </View>
        <ListItem height={{height:300}} title="Gizlilik Politikası" description={ <>
              <Text>Son güncellenme: <Text style={{fontWeight:"900"}}>15/05/2024</Text></Text>
              <Text>{"\n"}Güvenliğiniz bizim için önemli. Bu sebeple bizimle paylaşacağınız kişisel verileriniz hassasiyetle korunmaktadır. Biz, Deprem Radarı, veri sorumlusu olarak, bu gizlilik ve kişisel verilerin korunması politikası ile, hangi kişisel verilerinizin hangi amaçla işleneceği, işlenen verilerin kimlerle ve neden paylaşılabileceği, veri işleme yöntemimiz ve hukuki sebeplerimiz ile; işlenen verilerinize ilişkin haklarınızın neler olduğu hususunda sizleri aydınlatmayı amaçlıyoruz.</Text>
            </>} />
        <ListItem height={{height:380}} title="Toplanan Kişisel Verileriniz, Toplanma Yöntemi ve Hukuki Sebebi" 
        description={<Text>
          Kimlik, (isim, soy isim, doğum tarihi gibi) iletişim, (adres, e-posta adresi, telefon, IP, konum gibi) özlük, sosyal medya, finans bilgileriniz ile görsel ve işitsel kayıtlarınız tarafımızca, çerezler (cookies) vb. teknolojiler vasıtasıyla, otomatik veya otomatik olmayan yöntemlerle ve bazen de analitik sağlayıcılar, reklam ağları, arama bilgi sağlayıcıları, teknoloji sağlayıcıları gibi üçüncü taraflardan elde edilerek, kaydedilerek, depolanarak ve güncellenerek, aramızdaki hizmet ve sözleşme ilişkisi çerçevesinde ve süresince, meşru menfaat işleme şartına dayanılarak işlenecektir.
        </Text>} />
        <ListItem height={{height:425}} title="Kişisel Verilerinizin İşlenme Amacı" description={
              <Text>
              Bizimle paylaştığınız kişisel verileriniz; hizmetlerimizden faydalanabilmeniz amacıyla sizlerle sözleşmeler kurabilmek, sunduğumuz hizmetlerin gerekliliklerini en iyi şekilde ve aramızdaki sözleşmelere uygun olarak yerine getirebilmek, bu sözleşmelerden doğan haklarınızın tarafınızca kullanılmasını sağlayabilmek, ürün ve hizmetlerimizi, ihtiyaçlarınız doğrultusunda geliştirebilmek ve bu gelişmelerden sizleri haberdar edebilmek, ayrıca sizleri daha geniş kapsamlı hizmet sağlayıcıları ile yasal çerçeveler içerisinde buluşturabilmek ve kanundan doğan zorunlulukların (kişisel verilerin talep halinde adli ve idari makamlarla paylaşılması) yerine getirilebilmesi amacıyla, sözleşme ve hizmet süresince, amacına uygun ve ölçülü bir şekilde işlenecek ve güncellenecektir.
            </Text>} />
        <ListItem height={{height:260}} title="Toplanan Kişisel Verilerin Kimlere ve Hangi Amaçlarla Aktarabieceği" description={
              <Text>
              Bizimle paylaştığınız kişisel verileriniz; faaliyetlerimizi yürütmek üzere hizmet aldığımız ve/veya verdiğimiz, sözleşmesel ilişki içerisinde bulunduğumuz, iş birliği yaptığımız, yurt içi ve yurt dışındaki 3. şahıslar ile kurum ve kuruluşlara ve talep halinde adli ve idari makamlara, gerekli teknik ve idari önlemler alınması koşulu ile aktarılabilecektir.
            </Text>
        } />
        <ListItem height={{height:700}}title="Kişisel Verileri İşlenen Kişi Olarak Haklarınız" description={
            <Text>
              KVKK madde 11 uyarınca herkes, veri sorumlusuna başvurarak aşağıdaki haklarını kullanabilir:{"\n"}
              {"\n"}1. Kişisel veri işlenip işlenmediğini öğrenme,{"\n"}
              2. Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,{"\n"}
              3. Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,{"\n"}
              4. Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,{"\n"}
              5. Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,{"\n"}
              6. Kişisel verilerin silinmesini veya yok edilmesini isteme,{"\n"}
              7. (5) ve (6) bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,{"\n"}
              8. İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,{"\n"}
              9. Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme, haklarına sahiptir.{"\n"}
              Yukarıda sayılan haklarınızı kullanmak üzere <Text style={{fontWeight:"900"}}>depremRadari@gmail.com</Text> üzerinden bizimle iletişime geçebilirsiniz.
            </Text>}/>
        <ListItem height={{height:340}} title="İletişim" description={
            <Text>
            Sizlere talepleriniz doğrultusunda hizmet sunabilmek amacıyla, sadece gerekli olan kişisel verilerinizin, işbu gizlilik ve kişisel verilerin işlenmesi politikası uyarınca işlenmesini, kabul edip etmemek hususunda tamamen özgürsünüz. Uygulamayı kullanmaya devam ettiğiniz takdirde, kabul etmiş olduğunuz tarafımızca varsayılacaktır. Şayet kabul etmiyorsanız, lütfen uygulamayı tüm cihazlarınızdan kaldırınız. Ayrıntılı bilgi için bizimle <Text style={{fontWeight:"900"}}>depremRadari@gmail.com</Text> e-mail adresi üzerinden iletişime geçmekten lütfen çekinmeyiniz.
            </Text>
        }/>
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
      textAlign:"center",
      fontFamily:"sans-serif",
      color: "#009247"
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
    backgroundColor:"#ebfff4",
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
    height: 250,
  },
  imageContainer:{
    borderColor:"black",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:0,
    marginBottom:20,
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