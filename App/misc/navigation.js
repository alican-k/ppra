import { NavigationActions } from 'react-navigation'

/*
 * This api is the single place that we navigate through screens.

 * Also, components does not use this api directly. 
 * Instead, there is a navigation action which calls this api. 
 * 
 * By this way, we don't have to pass data between screens through the react-navigation state.
 * Since we already use redux, it is easier to hold data inside app state when necessary.
*/

let navigator = null

const setNavigator = nav => {
    navigator = nav
}

const navigate = routeName =>
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params: {}
          })
    )

export default {
    setNavigator, navigate
}