import { StyleSheet, Text, View, Dimensions} from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import {useResults, useResultsContext} from '../hooks/useResults'


const { width, height } = Dimensions.get('window');



export default function Harita() {
  const { results, errorMessage, loading } = useResultsContext();
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [region, setRegion] = useState(null);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);

      if (results.length > 0) {
        setRegion({
          latitude: 39.57,
          longitude: 32.53,
          latitudeDelta: 10,
          longitudeDelta: 10,
        });
      }
    })();
  }, [results]);

  if (!location) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 39.57,
          longitude: 34.53,
          latitudeDelta: 20,
          longitudeDelta: 20,
        }}
      >
        {results.map((result) => (
          <Marker
            key={result._id}
            coordinate={{latitude:parseFloat(result.latitude), longitude:parseFloat(result.longitude)}}
            title={result.title}
            description={`Magnitude: ${result.mag}`}
          />
        ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: width,
    height: height,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});