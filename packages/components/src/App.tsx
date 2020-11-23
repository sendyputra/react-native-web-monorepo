import React from 'react'
import { Provider as PaperProvider, Button } from 'react-native-paper'

export const App = () => {
  return (
    <PaperProvider>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}
      >
        Press me Again And Again
      </Button>
    </PaperProvider>
  )
}
