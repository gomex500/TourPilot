import React, {useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from 'react-native-maps';

const Details = () => {

    const [origin, setOrigin] = useState({
      latitude: 12.072896,
      longitude: -85.311809
    });
    const route = useRoute();
    const newsItem = route.params?.newsItem;

    // 213947402, -85.31180977399852

  return (
    <View>
      <Image source={{ uri: newsItem.image }} style={{ width: 200, height: 200 }} />
      <Text>Name: {newsItem.name}</Text>
      <Text>Description: {newsItem.description}</Text>
      <Text>Latitude: {newsItem.latitude}</Text>
      <Text>Longitude: {newsItem.longitude}</Text>
      <View style={{ flex: 1 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 12.072896,
            longitude: -85.311809,
            latitudeDelta: 0.0940,
            longitudeDelta: 0.0440,
          }}
        >
          <Marker
            coordinate={origin}
          />
        </MapView>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 200,
  },
});


export default Details;