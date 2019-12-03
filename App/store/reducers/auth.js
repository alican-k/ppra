import { actionTypes } from '../actions'
import { includes } from 'ramda'

const initialState = {
    loading: null,
    error: '',
    token: '',
    userId: null
}

const requestTypes = [
    actionTypes.PREREGISTER_REQUEST, actionTypes.REGISTER_REQUEST,
    actionTypes.AUTHENTICATE_REQUEST, actionTypes.LOGIN_REQUEST,
    actionTypes.VALIDATION_REQUEST
]
const fulfilledTypes = [
    actionTypes.PREREGISTER_FULFILLED, actionTypes.REGISTER_FULFILLED,
    actionTypes.AUTHENTICATE_FULFILLED, actionTypes.LOGIN_FULFILLED
]

const reducer = (state = initialState, action) => {
    console.log('**action: ', action)

    if(includes(action.type, requestTypes)) {
        return { ...state, loading: true }
    }

    if(includes(action.type, fulfilledTypes)) {
        const { token = '', message:error = '' } = action.payload
        return { ...state, error, token, loading: false }
    }

    if(action.type === actionTypes.VALIDATION_FULFILLED) {
        const { userId } = action.payload
        return { ...state, userId, loading: false }
    }

    if(action.type === actionTypes.NAVIGATE) {
        return { ...state, error: '', loading: null }
    }

    return state
}

export default reducer


/*
switch (action.type) {
        case actionTypes.PREREGISTER_REQUEST: {
            return { ...state, loading: true }
        }

        case actionTypes.PREREGISTER_FULFILLED: {
            const { token = '', message:error = '' } = action.payload
            return { ...state, error, token, loading: false }
        }

        case actionTypes.REGISTER_REQUEST: {
            return { ...state, loading: true }
        }

        case actionTypes.REGISTER_FULFILLED: {
            const { token = '', message:error = '' } = action.payload
            return { ...state, error, token, loading: false }
        }

        case actionTypes.REGISTER_REQUEST: {
            return { ...state, loading: true }
        }

        case actionTypes.REGISTER_FULFILLED: {
            const { token = '', message:error = '' } = action.payload
            return { ...state, error, token, loading: false }
        }

        case actionTypes.NAVIGATE: {
            return { ...state, error: '', loading: null }
        }
    
        default:
            return state
    }
*/