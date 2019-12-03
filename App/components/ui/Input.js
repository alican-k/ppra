import React from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'
import { noop } from '../../lib'

export const Input = ({
    style,
    label,
    placeholder, 
    value, 
    error,
    onChangeText,
    onFocus = noop,
    onBlur = noop,
    isFocused,
    ...rest
}) => {
    const iStyle = error
        ? styles.inputError
        : isFocused 
        ? styles.inputFocused 
        : styles.input

    return (
        <View style={style}>
            { label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={iStyle}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                onFocus={onFocus}
                onBlur={onBlur}
                {...rest}
            />
            <Text style={styles.error}>{error}</Text>
        </View>
    )
}


/* STYLES */


const inputStyle = {
    height: 50,
    color: '#252525',
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    fontWeight: '500',
    fontSize: 15,
    paddingHorizontal: 10,
}
const inputFocused = {
    backgroundColor: 'white',
    borderColor: '#454545',
}
const inputError = {
    borderColor: '#f44f4f',
    backgroundColor: 'rgba(244, 79, 79, 0.05)',
}

const styles = StyleSheet.create({
    input: inputStyle,
    inputFocused: {
        ...inputStyle,
        ...inputFocused
    },
    inputError: {
        ...inputStyle,
        ...inputError
    },
    label: {
        color: '#999999',
        fontSize: 14,
        fontWeight: '800',
        marginBottom: 6,
        marginLeft: 3,
    },
    error: {
        height: 18,
        marginTop: 2,
        marginLeft: 4,
        fontSize: 12,
        color: '#f44f4f',
    }
})