import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function VideoLayout({ route }) {

  const { url } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.webview}>
        <WebView
          style={styles.webview}
          javaScriptEnabled={true}
          source={{ uri: url }} // Burada YouTube video URL'sini belirtin
        />
      </View>
    
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:0,
  },
  webview: {
    borderWidth:0,
    backgroundColor:"black",
    width: "100%",
    height: 250,
  },
})