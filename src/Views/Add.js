import React, {useState} from "react";
import {Text, View, StyleSheet, KeyboardAvoidingView, Alert} from 'react-native';
import Buttom from "../components/Buttom";
import Input from "../components/Input";

const Add = () =>{
    const [lugar, setLugar] = useState({
        id:0,
        name: "",
        description: "",
        latitude: 0,
        longitude: 0,
        image: "",
        type:""
    });


    const obtenerDato = (key, value) => {
        setLugar({ ...lugar, [key]: value });
      };


      const BtnAgregar = () => {
          if (((lugar.name === ''||lugar.description === '')||(lugar.latitude < 1 || lugar.longitude < 1))
          ||(lugar.image === '' || lugar.type === '')) {
              Alert.alert("Algunos campos estan vacios")
          } else {
            Alert.alert("Lugar Agregado con Exito!")
            console.log(lugar);
          }
      };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Agregar Lugar</Text>
            <View>
                <Text style={styles.label}>Nombre del Lugar</Text>
                <Input
                    styles={styles.input}
                    ph={'Ingrese Nombre'}
                    type={"default"}
                    fuc={(value) => obtenerDato("name", value)}
                />
            </View>
            <View style={styles.box}>
           <View>
                <Text style={styles.label}>Foto del Lugar</Text>
                <Input
                    styles={styles.input2}
                    ph={'Ingrese Ruta de Imagen'}
                    type={"default"}
                    fuc={(value) => obtenerDato("image", value)}
                />
            </View>
            <View>
                <Text style={styles.label}>Tipo de Lugar</Text>
                <Input
                    styles={styles.input2}
                    ph={'Ingrese Tipo de Lugar'}
                    type={"default"}
                    fuc={(value) => obtenerDato("type", value)}
                />
            </View>
           </View>
           <View style={styles.box}>
           <View>
                <Text style={styles.label}>Latitud</Text>
                <Input
                    styles={styles.input2}
                    ph={'Ingrese Latitud'}
                    type={"numeric"}
                    fuc={(value) => obtenerDato("latitude", parseInt(value))}
                />
            </View>
            <View>
                <Text style={styles.label}>Longitud</Text>
                <Input
                    styles={styles.input2}
                    ph={'Ingrese Longitud'}
                    type={"numeric"}
                    fuc={(value) => obtenerDato("longitude", parseInt(value))}
                />
            </View>
           </View>
            <View>
                <Text style={styles.label}>Descripcion</Text>
                <Input
                    styles={styles.input}
                    ph={'Ingrese Longitud'}
                    type={"default"}
                    ta={true}
                    nl={4}
                    fuc={(value) => obtenerDato("description", value)}
                />
            </View>
            <Buttom
                styles={styles.btn}
                text={'Agregar'}
                stylesT={styles.textBtn}
                onPress={BtnAgregar}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525',
        padding: 10
      },
    input: {
        backgroundColor: '#636363',
        width: '100%',
        marginBottom: 12,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        color: '#f9f9f9'
    },
    input2: {
        backgroundColor: '#636363',
        width: 165,
        marginBottom: 12,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        color: '#f9f9f9'
    },
    title:{
        fontSize: 21,
        marginTop:5,
        marginLeft:5,
        marginBottom:10,
        color: '#e0b0ff',
        textAlign: "center"
      },
      label:{
          fontSize: 16,
          color: '#e0b0ff',
          margin: 10
      },
      box:{
          flexDirection:"row",
          alignItems: "center",
          justifyContent: "space-around",
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

export default Add;