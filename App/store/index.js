import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootReducer from './reducers'
import rootEpic from './epics'

const epicMiddleware = createEpicMiddleware()

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const store = createStore(rootReducer, enhancer(applyMiddleware(epicMiddleware)))

epicMiddleware.run(rootEpic)

export default store
export * from './actions'
