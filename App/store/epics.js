import { merge, of, empty, from } from 'rxjs'
import { catchError, tap, ignoreElements, switchMap, map } from 'rxjs/operators'
import { combineEpics, ofType } from 'redux-observable'
import { actionTypes, navigate, 
    preregisterFulfilled, authenticateFulfilled, loginFulfilled, validationFulfilled, registerFulfilled
} from './actions'
import nav from '../misc/navigation'
import requests from '../misc/requests'
import getText from '../texts'

/* 
 * createAuthEpic:
 * This function acts as an epic creator.
 * All requests to server (which are handled by epic functions below) 
 * follows same pattern, so this function create epics based on that similar pattern.
*/

const createAuthEpic = (type, request, actionCreator, screen) => 
    action$ => action$.pipe(
        ofType(type),
        switchMap(action => from(request(action.payload)).pipe(
            switchMap(res => res.json()),
            switchMap(res => merge(
                of(actionCreator(res)),
                Boolean(res.token) ? of(navigate({ screen: screen })) : empty(),
            )),
            catchError(() => of(actionCreator({ message: getText('requestError') })))
        )),
    )

const authenticateRequestEpic = createAuthEpic(
    actionTypes.AUTHENTICATE_REQUEST, requests.authenticate, authenticateFulfilled, 'Login'
)
const loginRequestEpic = createAuthEpic(
    actionTypes.LOGIN_REQUEST, requests.login, loginFulfilled, 'Home'
)
const preregisterRequestEpic = createAuthEpic(
    actionTypes.PREREGISTER_REQUEST, requests.preregister, preregisterFulfilled, 'Register'
)
const registerRequestEpic = createAuthEpic(
    actionTypes.REGISTER_REQUEST, requests.register, registerFulfilled, 'Authenticate'
)

const validationRequestEpic = action$ => action$.pipe(
    ofType(actionTypes.VALIDATION_REQUEST),
    switchMap(action => requests.validation(action.payload)),
    switchMap(res => res.json()),
    map(validationFulfilled)
)

const navigateEpic = action$ => action$.pipe(
    ofType(actionTypes.NAVIGATE),
    tap(action => nav.navigate(action.payload.screen)),
    ignoreElements()
)

export default combineEpics(
    preregisterRequestEpic,
    registerRequestEpic,
    authenticateRequestEpic,
    loginRequestEpic,
    validationRequestEpic,
    navigateEpic
)