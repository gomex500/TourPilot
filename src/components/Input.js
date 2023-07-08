import React from "react";
import {TextInput} from 'react-native';

const Input = ({styles, ph, val, fuc, type, ta, nl}) =>{
    return(
        <TextInput
            keyboardType={type}
            style={styles}
            placeholder={ph}
            value={val}
            onChangeText={fuc}
            multiline={ta} // Habilita el modo multiline
            numberOfLines={nl}
      />
    )
}

export default Input;