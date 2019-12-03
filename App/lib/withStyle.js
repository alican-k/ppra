import React from 'react'

export const withStyle = _style => Component => 
    ({ style, ...rest }) => {
        const finalStyle = { ...style, ..._style }
        return <Component style={finalStyle} {...rest} />
    }