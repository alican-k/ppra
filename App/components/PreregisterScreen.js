import React from 'react'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import { Field, Formik } from 'formik'
import { Screen, Button, MessagePanel, LoadingAnimation } from './ui'
import Fields from './FormikFields'
import { preregisterRequest, navigate } from '../store'
import getText from '../texts'

const initialValues = { name: 'Güven', surname: 'Gökbel', cellphone: '05435706135', tckn: '10361881200', birthdate: '25.10.1997' }

const Preregister = ({ auth, preregisterRequest, navigate }) => {
    const { loading, error } = auth

    return (
        <Screen title='Üyelik'>
            <KeyboardAwareScrollView>
                { Boolean(error) && 
                    <MessagePanel message={error} error style={{ marginBottom: 10 }} /> 
                }
                
                <Formik 
                    initialValues={initialValues}
                    onSubmit={values => preregisterRequest(values)}
                >
                    <>
                        <Field 
                            name='name' 
                            label={getText('inputLabelName')} 
                            placeholder={getText('inputPlaceholderName')} 
                            component={Fields.Input} 
                        />
                        <Field 
                            name='surname' 
                            label={getText('inputLabelSurname')} 
                            placeholder={getText('inputPlaceholderSurname')}
                            component={Fields.Input} 
                        />
                        <Field 
                            name='cellphone' 
                            label={getText('inputLabelMobile')} 
                            placeholder={getText('inputPlaceholderMobile')}
                            component={Fields.Input} 
                        />
                        <Field 
                            name='tckn' 
                            label={getText('inputLabelTckn')} 
                            placeholder={getText('inputPlaceholderTckn')}
                            component={Fields.Input} 
                        />
                        <Field 
                            name='birthdate' 
                            label={getText('inputLabelBirthday')}
                            placeholder={getText('inputPlaceholderBirthday')}
                            component={Fields.Input} 
                        />

                        { !loading && <Field title='Üye Ol' component={Fields.Submit} /> }

                        { loading && <LoadingAnimation style={styles.loading} /> }
                    </>
                </Formik>

                <Button 
                    type='secondary' 
                    title='Giriş yap' 
                    style={styles.button} 
                    onPress={() => navigate({ screen: 'Authenticate' })} 
                />
            </KeyboardAwareScrollView>
        </Screen>
    )
}

export default connect(
    state => ({ auth: state.auth }), 
    { preregisterRequest, navigate }
)(Preregister)

const styles = StyleSheet.create({
    loading: {
        alignSelf: 'center', 
        marginTop: 6
    },
    button: {
        marginVertical: 20
    }
})
