import React, { useEffect, useRef, useCallback } from 'react'
import { Animated, Easing } from 'react-native'
import assets from '../../assets'

export const LoadingAnimation = ({ style }) => {
    const animValue = useRef(new Animated.Value(0))
    
    const rotate = useCallback(() => {
        animValue.current.setValue(0)
        Animated.timing(
            animValue.current,
            {
                toValue: 1,
                duration: 1200,
                easing: Easing.linear
            }
        ).start(() => rotate())
    })

    const anim = animValue.current.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    useEffect(() => {
        rotate()
    }, [])

    const _style = { width: 40, height: 40, transform: [{ rotate: anim }], ...style }

    return (
        <Animated.Image
            style={_style}
            source={assets.loading}
        />
    )
}
