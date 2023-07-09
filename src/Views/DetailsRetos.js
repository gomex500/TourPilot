import React, {useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Buttom from '../components/Buttom';

const DetailsRetos = ({navigation}) =>{

    const route = useRoute();
    const newsItem = route.params?.newsItem;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: newsItem.image }} style={{ width: '100%', height: 200, borderRadius: 8 }} />
        <Text style={styles.title}>{newsItem.name}</Text>
        <Text style={styles.par}>{newsItem.description}</Text>
        <Text style={styles.par}>{newsItem.pasos}</Text>
      </View>
      <Buttom
          styles={styles.btn}
          stylesT={styles.textBtn}
          text={'Buscar Lugar'}
          onPress={() => navigation.navigate('Lugares Para el Reto')}
        />
    </View>
  );
}

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
      fontSize: 21,
      marginTop:5,
      marginLeft:5,
      color: '#e0b0ff'
    },
    par:{
      fontSize: 16,
      marginTop:10,
      marginLeft:5,
      marginBottom:20,
      color: '#f9f9f9',
    },
    btn:{
        width: '100%',
        backgroundColor: '#8e22bb',
        padding: 15,
        borderWidth: 1,
        borderColor: '#e0b0ff',
        borderRadius: 4,
        color: '#f9f9f9',
        textAlign: "center",
        marginTop: 20
      },
      textBtn:{
          fontWeight: 'bold',
          color: '#f9f9f9',
          textAlign: 'center'
      }
  });

export default DetailsRetos;