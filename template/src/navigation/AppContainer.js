import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'
import SignIn from '../screens/SignIn'
import Home from '../screens/Home'

const RootStack = createStackNavigator()

const AppContainer = (props) => {
    const signedIn = useSelector(state => state.authentication.signedIn)

    return (
        <NavigationContainer {...props}>
            <RootStack.Navigator>
                {!signedIn ?
                    <RootStack.Screen name="SignIn" component={SignIn} /> :
                    <RootStack.Screen name="Home" component={Home} />
                }
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

  
export default AppContainer