import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

const Input = props => {
    return <TextInput {...props} style={{...styles.textBox, ...props.styles}}/>
}

const styles = StyleSheet.create({
    textBox: {
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
        width: '100%',
        padding: 10
    },
});
export default Input;