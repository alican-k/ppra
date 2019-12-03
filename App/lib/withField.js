import React, { useState } from 'react'

/*
 * When Input and Button component is used as a Formik field, 
 * enhance them with these HOCs first.
*/

export const withField = Component => props => {
    const [isFocused, setIsFocused] = useState(false)

    const { meta, field, form, ...rest } = props
    const { name, value } = field
    const { handleChange, handleBlur } = form
    const { error: err, touched } = meta || {}

    const error = touched && err 
    const onChangeText = handleChange(name)
    const onBlur = () => {
        setIsFocused(false)
        handleBlur(name)
    }
    const onFocus = () => setIsFocused(true)

    const newProps = { value, error, onChangeText, onFocus, isFocused, onBlur, ...rest }

    return <Component {...newProps} />
}

export const withSubmit = Component => props => {
    const { meta, field, form, ...rest } = props

    const { handleSubmit } = form
    
    return <Component onPress={handleSubmit} {...rest} />
}