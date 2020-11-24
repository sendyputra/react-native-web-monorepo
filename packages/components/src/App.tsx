import React from 'react'
import { Provider as PaperProvider, Button } from 'react-native-paper'
import AppNavigators from './navigators/AppNavigators'

export const App = () => {
  return (
    <PaperProvider>
      <AppNavigators />
    </PaperProvider>
  )
}
