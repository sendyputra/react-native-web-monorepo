import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack'

//* Screens
import HomeScreen from '../screens/Home/Home'
import AboutScreen from '../screens/About/About'
import Header from '../common/Header/Header'

const Stack = createStackNavigator()

const AppNavigators = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          headerMode="screen"
          screenOptions={{ header: () => <Header /> }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default AppNavigators
