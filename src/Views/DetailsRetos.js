import React from "react";
import { Text, View } from "react-native";
import { useRoute } from '@react-navigation/native';

const DetailsRetos = () =>{

    const route = useRoute();
    const retos = route.params?.newsItem;

    return(
        <View>
            <Text>Reto</Text>
        </View>
    );
}

export default DetailsRetos;