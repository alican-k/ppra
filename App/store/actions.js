const ac = type => payload => ({ type, payload })

const APP_INIT = 'APP_INIT'
const NAVIGATE = 'NAVIGATE'
const AUTHENTICATE_REQUEST = 'AUTHENTICATE_REQUEST'
const AUTHENTICATE_FULFILLED = 'AUTHENTICATE_FULFILLED'
const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_FULFILLED = 'LOGIN_FULFILLED'
const PREREGISTER_REQUEST = 'PREREGISTER_REQUEST'
const PREREGISTER_FULFILLED = 'PREREGISTER_FULFILLED'
const REGISTER_REQUEST = 'REGISTER_REQUEST'
const REGISTER_FULFILLED = 'REGISTER_FULFILLED'
const VALIDATION_REQUEST = 'VALIATION_REQUEST'
const VALIDATION_FULFILLED = 'VALIDATION_FULFILLED'



export const appInit = ac(APP_INIT)
export const navigate = ac(NAVIGATE)
export const authenticateRequest = ac(AUTHENTICATE_REQUEST)
export const authenticateFulfilled = ac(AUTHENTICATE_FULFILLED)
export const loginRequest = ac(LOGIN_REQUEST)
export const loginFulfilled = ac(LOGIN_FULFILLED)
export const preregisterRequest = ac(PREREGISTER_REQUEST)
export const preregisterFulfilled = ac(PREREGISTER_FULFILLED)
export const registerRequest = ac(REGISTER_REQUEST)
export const registerFulfilled = ac(REGISTER_FULFILLED)
export const validationRequest = ac(VALIDATION_REQUEST)
export const validationFulfilled = ac(VALIDATION_FULFILLED)


export const actionTypes = {
    APP_INIT,
    NAVIGATE,
    AUTHENTICATE_REQUEST,
    AUTHENTICATE_FULFILLED,
    LOGIN_REQUEST,
    LOGIN_FULFILLED,
    PREREGISTER_REQUEST,
    PREREGISTER_FULFILLED,
    REGISTER_REQUEST,
    REGISTER_FULFILLED,
    VALIDATION_REQUEST,
    VALIDATION_FULFILLED
}