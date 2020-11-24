import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import { Appbar } from 'react-native-paper'

const Header = () => {
  const route = useRoute()
  const navigation = useNavigation()

  return route.name === 'Home' ? (
    <Appbar.Header>
      <Appbar.Content title={route.name} subtitle="Subtitle" />
    </Appbar.Header>
  ) : (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={route.name} subtitle="Subtitle" />
    </Appbar.Header>
  )
}

export default Header
