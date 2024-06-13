import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Image} from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Deprem'); // Ana ekranınızın adıyla değiştirin
    }, 3000); // 3 saniye

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/splash.jpeg")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image:{
    width:Dimensions.get('window').width,
    height:"100%"
  }
});

export default SplashScreen;
