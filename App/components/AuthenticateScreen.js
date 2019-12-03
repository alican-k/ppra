import React from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { useInputState } from '../lib'
import { Screen, MessagePanel, LoadingAnimation, Button, Input } from './ui'
import { authenticateRequest, navigate } from '../store'
import getText from '../texts'

const AuthenticateScreen = ({ auth, authenticateRequest, navigate }) => {
    const inp = useInputState('')

    return (
        <Screen title={getText('authenticateTitle')}>
            <MessagePanel message={getText('authenticateMessage')} style={styles.message} />
            { Boolean(auth.error) && 
                <MessagePanel message={auth.error} error style={styles.message} /> 
            }
            <Input 
                label={getText('inputLabelMobile')} 
                placeholder={getText('inputPlaceholderMobile')}
                value={inp.value}
                onChangeText={inp.onChangeText}
                isFocused={inp.isFocused}
                onBlur={inp.onBlur}
                onFocus={inp.onFocus}
            />

            { !auth.loading && (
                <Button 
                    title={getText('buttonTitleLogin')} 
                    onPress={() => authenticateRequest({ cellphone: inp.value })} 
                /> 
            )}

            { auth.loading && <LoadingAnimation style={styles.loading} /> }
    
            <Button 
                type='secondary' 
                title={getText('buttonTitleRegister')} 
                style={styles.button} 
                onPress={() => navigate({ screen: 'Preregister' })} 
            />
        </Screen>
    )
}

export default connect(
    state => ({ auth: state.auth }), 
    { authenticateRequest, navigate }
)(AuthenticateScreen)


const styles = StyleSheet.create({
    loading: {
        alignSelf: 'center', 
        marginTop: 6
    },
    message: {
        marginBottom: 20
    },
    button: {
        marginTop: 30
    }
})
