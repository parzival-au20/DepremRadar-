import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';

export default function FilterButtons( { buttonClicked, onButtonClick } ) {

    // Butonlara tıklama işlevi
    const handleButtonClick = (index) => {
        onButtonClick(index);
    };

  return (
    <View style={styles.filterBar}>
      <TouchableOpacity style={[styles.button, {backgroundColor:"#019247", borderWidth: buttonClicked[0] ? 1 : 0,}]} onPress={() => handleButtonClick(0)}>
        <Text style={styles.buttonText}>1-2</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.button, {backgroundColor:"#ffba0a", borderWidth: buttonClicked[1] ? 1 : 0,}]} onPress={() => handleButtonClick(1)}>
        <Text style={styles.buttonText}>2-3</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.button, {backgroundColor:"#ff7f00", borderWidth: buttonClicked[2] ? 1 : 0,}]} onPress={() => handleButtonClick(2)}>
        <Text style={styles.buttonText}>3-4</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.button, {backgroundColor:"red", borderWidth: buttonClicked[3] ? 1 : 0,}]} onPress={() => handleButtonClick(3)}>
        <Text style={styles.buttonText}> 4+ </Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 15,
        borderRadius: 7,
        marginLeft: 18,
        height:25,
        alignSelf:"center",
        borderColor:"black",
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight:"bold",
      },
      filterBar:{
        flexDirection:"row",
        //alignSelf:"flex-start",
        backgroundColor:"white",
        width:400,
        //marginBottom : 20,
        borderColor: "red",
        borderWidth:0,
      },
})