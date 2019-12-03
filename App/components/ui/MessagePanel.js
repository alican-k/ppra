import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const MessagePanel = ({ style, message, error }) => {
    const cStyle = error ? styles.containerError : styles.container

    return (
        <View style={[cStyle, style]}>
            <Text style={styles.text}>{message}</Text>
        </View>
    )
}

const containerStyle = {
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    padding: 10
}
const containerErrorStyle = {
    borderColor: '#f44f4f',
    backgroundColor: 'rgba(244, 79, 79, 0.05)',
}

const styles = StyleSheet.create({
    container: { ...containerStyle },
    containerError: {
        ...containerStyle,
        ...containerErrorStyle
    },
    text: {
        color: '#252525',
        fontWeight: '500',
    }
})