import React, { useState } from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native'
import Data from '../datos.json';
import Buttom from '../components/Buttom';
// import axios from 'axios';


const Home = ({navigation}) => {
    const [lugar, setLugar] = useState(Data.places);

  return (
    <View style={styles.container}>
      <FlatList
        data={lugar}
        style={{padding:5}}
        renderItem={({item}) =>(
            <TouchableOpacity
                style={styles.card}
                key={item.id}
                onPress={() => navigation.navigate('Details', { newsItem: item })}
            >
                <Image source={{ uri: item.image }} style={{ width: '100%', height: 200, borderRadius: 8 }}/>
                <View style={styles.box}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.start}>{item.type}</Text>
                </View>
            </TouchableOpacity>
            )}
        keyExtractor={(item) => item.id?.toString()}
     />
      <View style={styles.container2}>
        <Buttom
          styles={styles.button}
          stylesT={styles.textBtn}
          text={'Retos'}
          onPress={() => navigation.navigate('Retos')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#252525',
    },
    container2: {
      position: 'absolute',
      bottom: 50,
      right: 30,
    },
    button: {
      backgroundColor: '#ab49cc',
      borderRadius: 30,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card:{
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
      color: '#e0b0ff'
    },
    start:{
      fontSize: 16,
      marginTop:5,
      marginLeft:5,
      color:'#f9f9f9'
    },
    box:{
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'space-between',
      paddingRight: 20,
    },
    textBtn:{
      color:'#f9f9f9'
    }
});

export default Home;