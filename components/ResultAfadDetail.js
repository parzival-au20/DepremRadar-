import { StyleSheet, Text, View, Image} from 'react-native'
import React, {useState, useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRulerVertical,faAngleRight } from '@fortawesome/free-solid-svg-icons';


export default function ResultAfadDetail({ result }) {
  //console.log("AfadResultDetail => "+result);

const magValue = parseFloat(result.magnitude);
let blankColor = "#009247"; // Varsayılan renk
let textColor = "#009247";
let magBlockColor = "#ebfff4";
// Mag değerine göre blank rengini ayarla
if (magValue >= 4) {
  blankColor = "#ff0000"; // Kırmızı
  textColor = "#ff0000"; // Kırmızı
  magBlockColor ="#FFDEDD";
} else if (magValue >= 3) {
  blankColor = "#fb7f01"; // Turuncu
  textColor = "#fb7f01"; // Turuncu
  magBlockColor ="#fff0e1";
} else if (magValue >= 2) {
  blankColor = "#ffba09"; // Sarı
  textColor = "#ffba09"; // Sarı
  magBlockColor ="#fff9eb";
}

  return (
    <View style = {{flexDirection:"column" , borderColor:"orange"}}>
      <View style = {styles.ListItem}>
          <View style = {[styles.blank, { backgroundColor: blankColor }]}>
          </View>
          <View style = {[styles.magBlock, {backgroundColor : magBlockColor}]}>
            <Text style = {[styles.mag, { color: textColor}]}>{result.magnitude}</Text>
          </View>
          <View style = {styles.info}>
            <Text numberOfLines={1} ellipsizeMode="tail" style = {styles.name}>{result.district}</Text>
            {result.province && <Text style={styles.name}>{result.province}</Text>}
                <View style = {{flexDirection:"row", position:"relative"}}>
                  <AntDesign name="clockcircle" size={12} color="gray" style={{marginTop:17, marginRight:2 }}/>
                  <Text style = {styles.footerInfo}>
                  {result.date}</Text>
                  <View style={{ width: 10 }} /> 
                  <FontAwesomeIcon icon={faRulerVertical} color="gray" size={12} style={{marginTop:17, marginRight:2 }}/>
                  <Text style={styles.footerInfo}>
                    {result.depth} KM
                  </Text>
              </View>
          </View>
          <View style={styles.sendIconView}>
              <FontAwesomeIcon icon={faAngleRight} size={30} color='gray' style={styles.sendIcon}/>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    info :{
        backgroundColor: "white",
        borderColor: "red",
        borderWidth:0,
        width:230,
        marginLeft:10,
        justifyContent :"flex-end"
    },
    magBlock:{
      alignSelf: "center",
      width:85,
      backgroundColor: "#ebfff4",
      height: 80,
      justifyContent: "center",
    },
    mag :{
        fontWeight:'900',
        alignSelf: "center",
        alignItems: "center",
        fontSize:45,
        borderColor: "red",
        borderWidth:0,
        color: "#009247",
    },
    name :{
      fontSize:16,
        fontWeight : 'bold',
    },
    footerInfo : {
      fontWeight : "600",
      color :"#ADADAD",
      fontSize:12,
      marginTop:15,
    },
    blank:{
      width:15,
      marginLeft:0.25,
      borderColor: "green",
      backgroundColor: "#009247",
      borderWidth:0,
      height: "100%",
      borderBottomLeftRadius:10,
      borderTopLeftRadius:10,
    },
    ListItem:{
      flexDirection:"row", 
      backgroundColor:"white",
      marginBottom:10, 
      borderRadius:10,
      borderColor:"purple", 
      width:375,
      borderWidth:0,
    },
    sendIconView : {
        justifyContent: "center",
        alignItems:"flex-end",
        borderColor: "red",
        borderWidth:0,
        width:30,
    }
})