import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'

const Buttom = ({stylesV, stylesB, text, onPress}) =>{
    return(
        <View style={stylesV}>
            <TouchableOpacity style={stylesB} onPress={onPress}>
                <Text>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Buttom;