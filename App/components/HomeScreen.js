import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Screen, MessagePanel, Button, LoadingAnimation } from './ui'
import { validationRequest } from '../store'
import getText from '../texts'

const Home = ({ auth, validationRequest }) => {
    const { token, userId, loading } = auth

    return (
        <Screen title={getText('screenTitleHome')}>
            <MessagePanel message={getText('screenMessageHome')} style={styles.margin} /> 
            { !loading && (
                <Button 
                    title={getText('buttonTitleValidation')} 
                    onPress={() => validationRequest({ token })} 
                    style={styles.margin}
                />
            )}
            { auth.loading && <LoadingAnimation style={styles.loading} /> }

            { userId && <Text>user id: {userId}</Text>}
        </Screen>
    )
}

export default connect(
    state => ({ auth: state.auth }), 
    { validationRequest }
)
(Home)

const styles = StyleSheet.create({
    loading: {
        alignSelf: 'center', 
        marginVertical: 10
    },
    margin: {
        marginBottom: 20
    }
})