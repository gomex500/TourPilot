import React, { useState } from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native'
import Data from '../datos.json';
import Buttom from '../components/Buttom';
// import axios from 'axios';


const Home = ({navigation}) => {

  const apiKey = 'FuhLgm_4W8_uLmMOzrXyb4TBzhjtje2eGpKgEXbuNWwNAi4A1_F7pEZ6v8oV_7E_3W-uuoQ3DhNbd6enelbOdtbGjVuLlwZRVy5Crxy5SbWBIoK-tpt1cIYXVl2mZHYx';

      const [lugar, setLugar] = useState(Data.places);

    const handlePlacePress = (lugar) => {
        navigation.navigate('Details', { lugar });
    };

  return (
    <View style={styles.container}>
      <FlatList
        data={lugar}
        renderItem={({item}) =>(
            <TouchableOpacity
                style={styles.newsItem}
                key={item.id}
                onPress={() => navigation.navigate('Details', { newsItem: item })}
            >
                <Image source={{ uri: item.image }} style={{ width: '100%', height: 200, borderRadius: 8 }}/>
                <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
            )}
        keyExtractor={(item) => item.id?.toString()}
     />
      <Buttom
        stylesV={styles.container2}
        stylesB={styles.button}
        text={'Add'}
        onPress={console.log('hola')}
      />

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#474747',
    },
    container2: {
      position: 'absolute',
      bottom: 16,
      right: 16,
    },
    button: {
      backgroundColor: 'blue',
      borderRadius: 30,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default Home;