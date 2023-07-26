import React, { useMemo } from 'react'
import { NavigationContainer, } from '@react-navigation/native'
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { colors } from './consts/theme'
import Home from './containers/Home'
import ValuesByIndicator from './containers/ValuesByIndicator'
import IndicatorDetails from './containers/IndicatorDetails'
import HeaderBack from './components/atoms/HeaderBack'

const Stack = createNativeStackNavigator()

function App() {
  const stackOptions: NativeStackNavigationOptions = useMemo(() => ({
    contentStyle: {
      backgroundColor: colors.BACKGROUND
    }
  }), [])

  const homeOptions: NativeStackNavigationOptions = useMemo(() => ({
    headerShown: false,
  }), [])

  const screenOptions: NativeStackNavigationOptions = useMemo(() => ({
    header: () => (
      <GestureHandlerRootView>
        <HeaderBack />
      </GestureHandlerRootView>
    ),
    title: '',
    headerShadowVisible: false,
  }), [])


  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={stackOptions} initialRouteName='Home'>
        <Stack.Screen name='Home' options={homeOptions} component={Home} />
        <Stack.Screen
          name='ValuesByIndicator'
          options={screenOptions}
          component={ValuesByIndicator}
        />
        <Stack.Screen
          name='IndicatorDetails'
          options={screenOptions}
          component={IndicatorDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
