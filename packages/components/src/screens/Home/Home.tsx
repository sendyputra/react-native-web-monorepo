import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

const Home = () => {
  const navigations = useNavigation()
  return (
    <View>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigations.navigate('About')}
      >
        Go To About Screen
      </Button>
    </View>
  )
}

export default Home
