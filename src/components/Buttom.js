import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'

const Buttom = ({styles, text, onPress}) =>{
    return(
        <TouchableOpacity style={styles} onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export default Buttom;