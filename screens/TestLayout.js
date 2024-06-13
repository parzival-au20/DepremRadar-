import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function TestLayout({ route }) {
  const { soru, cevap_A, cevap_B, dogru_cevap } = route.params;

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerPress = (answer) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
  };

  const getBackgroundColor = (answer) => {
    if (!isAnswered) return '#fcf0d6'; // Default background color
    if (answer === dogru_cevap) return 'green';
    if (answer === selectedAnswer) return 'red';
    return '#fcf0d6'; // Default background color
  };

  return (
    <View style={styles.container}>
      <View style={styles.webview}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Öğrenelim</Text>
        </View>
        <View style={styles.soruView}>
          <Text style={styles.soruText}>{soru}</Text>
        </View>
        <TouchableOpacity onPress={() => handleAnswerPress("A")} disabled={isAnswered}>
          <View style={[styles.cevapView, { backgroundColor: getBackgroundColor("A") }]}>
            <Text style={styles.cevapText}>{cevap_A}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAnswerPress("B")} disabled={isAnswered}>
          <View style={[styles.cevapView, { backgroundColor: getBackgroundColor("B") }]}>
            <Text style={styles.cevapText}>{cevap_B}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:0,
  },
  webview: {
    backgroundColor:"#ceae7f",
    borderWidth:2,
    width: 650,
    height: 360,
    transform: [{ rotate: '90deg' }],
    borderRadius:10,
  },
  titleView:{
    backgroundColor:"#c93a2c",
    width:"65%",
    alignItems:"center",
    borderRadius:10,
    height:70,
    justifyContent:"center",
    alignSelf:"center",
  },
  titleText:{
    color:"white",
    fontWeight:"900",
    fontSize:36,
  },
  soruView: {
    backgroundColor:"#fcf0d6",
    width:"95%",
    height:80,
    borderRadius:10,
    alignSelf:"center",
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
  },
  soruText:{
    fontWeight:"900",
    fontSize:22,
    textAlign:"center",
  },
  cevapView: {
    backgroundColor:"#fcf0d6",
    width:"85%",
    height:75,
    borderRadius:10,
    alignSelf:"center",
    justifyContent:"center",
    alignItems:"center",
    marginTop:15,
  },
  cevapText:{
    fontWeight:"900",
    fontSize:20,
    textAlign:"center",
    padding:2
  },
})
