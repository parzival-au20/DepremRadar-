import { StyleSheet, Text, View, Image, Platform, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRulerVertical,faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Tercihler() {

  let blankColor = "#009247"; // Varsayılan renk
  let textColor = "#009247";
  let magBlockColor = "#ebfff4";
  return (
    <View style = {styles.main}>
      <View style = {styles.title}>
        <Text style = {styles.titleFont}>ANASAYFA TERCİHLERİ</Text>
      </View>
      <TouchableOpacity>
        <View style = {styles.ListItem}>
          <View style = {styles.imageContainer}>
            <Image
              source={require('../assets/form.png')}
              style={styles.image}
            />
          </View>
          <View style = {styles.info}>
            <Text style ={styles.textItem}>Deprem Veri Kaynağı</Text>
          </View>
          <View style={styles.sendIconView}>
              <FontAwesomeIcon icon={faAngleRight} size={50} color='gray' style={styles.sendIcon}/>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style = {styles.ListItem}>
          <View style = {styles.imageContainer}>
            <Image
              source={require('../assets/yildirim.png')}
              style={styles.image}
            />
          </View>
          <View style = {styles.info}>
            <Text style ={styles.textItem}>Deprem Şiddeti</Text>
          </View>
          <View style={styles.sendIconView}>
              <FontAwesomeIcon icon={faAngleRight} size={50} color='gray' style={styles.sendIcon}/>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style = {styles.ListItem}>
          <View style = {styles.imageContainer}>
              <AntDesign name="clockcircle" size={40} color="gray" style={{marginLeft:0 }}/>
          </View>
          <View style = {styles.info}>
            <Text style ={styles.textItem}>Zaman</Text>
          </View>
          <View style={styles.sendIconView}>
              <FontAwesomeIcon icon={faAngleRight} size={50} color='gray' style={styles.sendIcon}/>
          </View>
      </View>
      </TouchableOpacity>
      
      <View style = {[styles.title, {marginTop:10}]}>
        <Text style = {styles.titleFont}>DİĞER</Text>
      </View>
      <TouchableOpacity>
        <View style = {styles.ListItem}>
          <View style = {styles.imageContainer}>
            <Image
              source={require('../assets/earth.png')}
              style={styles.image}
            />
          </View>
          <View style = {styles.info}>
            <Text style ={styles.textItem}>Gizlilik</Text>
          </View>
          <View style={styles.sendIconView}>
              <FontAwesomeIcon icon={faAngleRight} size={50} color='gray' style={styles.sendIcon}/>
          </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style = {styles.ListItem}>
          <View style = {styles.imageContainer}>
            <Image
              source={require('../assets/star.png')}
              style={styles.image}
            />
          </View>
          <View style = {styles.info}>
            <Text style ={styles.textItem}>Uygulamaya Destek Ol</Text>
          </View>
          <View style={styles.sendIconView}>
              <FontAwesomeIcon icon={faAngleRight} size={50} color='gray' style={styles.sendIcon}/>
          </View>
      </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor : "#e2f8ff",
        borderWidth:0,
    },
    textItem: {
        fontSize : 22,
        fontWeight:"700",
        color : "black",
        fontFamily:"sans-serif",
    },
    info :{
      backgroundColor: "white",
      borderColor: "red",
      borderWidth:0,
      marginLeft:10,
      justifyContent :"center"
  },
  ListItem:{
    flexDirection:"row", 
    backgroundColor:"white",
    marginTop:10, 
    marginBottom:10,
    borderRadius:10,
    borderColor:"purple", 
    width:360,
    height:85,
    borderWidth:0,
  },
  sendIconView : {
      justifyContent: "center",
      borderColor: "black",
      borderWidth:0,
      alignItems:"flex-end",
      flex:1,
  },
  image: {
    width: 45,
    height: 45,
  },
  imageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:0,
    marginLeft:10,
  },
  title:{
    alignSelf: 'flex-start',
    marginTop:30,
    marginStart:20,
  },
  titleFont:{
    fontSize:18,
    fontWeight:"900",
    color:"#31363F"
  }
})