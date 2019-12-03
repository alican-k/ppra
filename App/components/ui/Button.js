import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export const Button = ({ type='primary', title, onPress, style }) => {
    return (
        <TouchableOpacity style={[styles[type], style]} onPress={onPress}>
            <Text style={styles[`${type}Text`]}>{title}</Text>
        </TouchableOpacity>
    )
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 5
}

const styles = StyleSheet.create({
    primary: {
        ...containerStyle,
        backgroundColor:'#ff552b',
    },
    secondary: {
        ...containerStyle,
        backgroundColor:'#d9f8ff',
    },
    primaryText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '800'
    },
    secondaryText: {
        color: '#23b1d3',
        fontSize: 18,
        fontWeight: '800'
    }
})