import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Authenticate from './components/AuthenticateScreen'
import Preregister from './components/PreregisterScreen'
import Register from './components/RegisterScreen'
import Login from './components/LoginScreen'
import Home from './components/HomeScreen'

const SwitchNavigator = createSwitchNavigator({
    Authenticate,
    Preregister, 
    Register,
    Login,
    Home
})

export default createAppContainer(SwitchNavigator)