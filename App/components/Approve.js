import React from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Screen, Input, Button, MessagePanel, LoadingAnimation } from './ui'
import { useInputState } from '../lib'
import { registerRequest, loginRequest, navigate } from '../store'
import getText from '../texts'

const Approve = ({ approveFor, auth, navigate, registerRequest, loginRequest }) => {
    const inp = useInputState('')

    const requestFn = approveFor === 'register' ? registerRequest : loginRequest
    const previousScreen = approveFor === 'register' ? 'Preregister' : 'Authenticate'

    return(
        <Screen title={getText('screenTitleApprove')}>
            <MessagePanel message={getText('screenMessageApprove')} style={styles.message} /> 

            { Boolean(auth.error) && 
                <MessagePanel message={auth.error} error style={styles.message} /> 
            }

            <Input 
                label='ONAY KODU' 
                placeholder='Sms onay kodu' 
                value={inp.value}
                onChangeText={inp.onChangeText}
                isFocused={inp.isFocused}
                onFocus={inp.onFocus}
                onBlur={inp.onBlur}
            />

            { !auth.loading && (
                <Button 
                    title={getText('buttonTitleApprove')}
                    onPress={() => requestFn({ smscode: inp.value, token: auth.token })}
                /> 
            )}

            { auth.loading && <LoadingAnimation style={styles.loading} /> }
    
            <Button 
                type='secondary' 
                title={getText('buttonTitleBack')}
                style={styles.button} 
                onPress={() => navigate(previousScreen)} 
            />

        </Screen>
    )
}

export default connect(
    state => ({ auth: state.auth }),
    { registerRequest, loginRequest, navigate }
)(Approve)

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