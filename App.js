import 'react-native-gesture-handler'
import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Navigator from './src/screens/Navigator'
// import {StoreProvider} from './src/contexts/Store'

export default function App() {
  return (
    // <StoreProvider>
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
    // </StoreProvider>
  )
}
