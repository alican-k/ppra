import { useState, useCallback } from 'react'

export const useInputState = initial => {
    const [state, setState] = useState({ value: initial, isFocused: false })

    const onFocus = useCallback(() => {
        setState(state => ({ ...state, isFocused: true }))
    }, [])
    const onBlur = useCallback(() => {
        setState(state => ({ ...state, isFocused: false }))
    }, [])
    const onChangeText = useCallback(value => {
        setState(state => ({ ...state, value }))
    }, [])

    const { value, isFocused } = state

    return { value, isFocused, onFocus, onBlur, onChangeText }
}
