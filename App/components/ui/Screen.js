import { StatusBar, Text, View, StyleSheet } from 'react-native'
import React from 'react'

export const Screen = ({ title, children }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.body}>
                { children }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0139ba',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 15,
    },
    body: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        padding: 14,
        paddingBottom: 0,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }

})
