import React from "react";

const Input = ({styles, ph, val, fuc}) =>{
    return(
        <TextInput
            style={styles.input}
            placeholder={ph}
            value={val}
            onChangeText={fuc}
      />
    )
}

export default Input;