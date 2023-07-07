import React, {useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from 'react-native-maps';

const Details = () => {

    const route = useRoute();
    const newsItem = route.params?.newsItem;

    const [origin, setOrigin] = useState({
      latitude: newsItem.latitude,
      longitude: newsItem.longitude
    });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: newsItem.image }} style={{ width: '100%', height: 200, borderRadius: 8 }} />
        <Text style={styles.title}>{newsItem.name}</Text>
        <Text style={styles.par}>{newsItem.description}</Text>
        <View>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: origin.latitude,
              longitude: origin.longitude,
              latitudeDelta: 0.0910,
              longitudeDelta: 0.0410,
            }}
          >
            <Marker
              coordinate={origin}
            />
          </MapView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
  },
  map: {
    width: '100%',
    height: 300,
  },
  card:{
    flex:1,
    marginTop:5,
    borderRadius: 6,
    elevation: 3,
    padding:10,
    shadowOffset: {width: 1,height:1},
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  title:{
    fontSize: 20,
    marginTop:5,
    marginLeft:5,
    color: '#f9f9f9'
  },
  par:{
    fontSize: 16,
    margin:10,
    marginLeft:5
  }
});


export default Details;