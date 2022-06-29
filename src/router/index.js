import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { ROUTER_PATH } from '../constants/routerPath'
import { Login, Landing } from '../screens'
import SplashScreen from '../screens/Auth/SplashScreen'

const Stack = createStackNavigator()

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTER_PATH.AUTH_STACK.SPLASH}
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ROUTER_PATH.AUTH_STACK.LOGIN}
          component={Login}
          options={{
            headerShown: false,
          }}
        /> 
        <Stack.Screen
          name={ROUTER_PATH.AUTH_STACK.LANDING}
          component={Landing}
          options={{
            headerShown: false,
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack
