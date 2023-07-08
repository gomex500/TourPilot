import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'

const Buttom = ({styles, stylesT, text, onPress}) =>{
    return(
        <TouchableOpacity style={styles} onPress={onPress}>
            <Text style={stylesT}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Buttom;