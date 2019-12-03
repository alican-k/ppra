import React from 'react'
import { Provider } from 'react-redux'
import AppNavigator from './Navigation'
import nav from './misc/navigation'
import store from './store'

const App = () =>
    <Provider store={store}>
        <AppNavigator ref={ref => nav.setNavigator(ref)} />
    </Provider>

export default App