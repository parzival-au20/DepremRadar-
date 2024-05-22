import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Buy() {
  return (
    <View style = {styles.main}>
      <Text style = {styles.text}>Ayarlar Ekranı</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : "white",
    },

    text: {
        fontSize : 20,
        backgroundColor : "red",
        textAlign: "center",
        color : "white",
        padding : 10,
    },
})