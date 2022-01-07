import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import MainScreen from './MainScreen'
import CategoryShow from './CategoryShow'
import {Text} from '../components'
const Stack = createStackNavigator()

const Navigator = () => {
  // const {fetchRecords} = useStore()
  // const [loading, setLoading] = useState(true)

  // const fetchData = useCallback(async () => {
  //   await fetchRecords()
  //   setLoading(false)
  // }, [])
  // useEffect(() => {
  //   fetchData()
  // }, [fetchData])
  return (
    <>
      {/* {loading && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text level={2} disabled>
            Loading...
          </Text>
        </View>
      )} */}
      {/* !loading */}
      {!false && (
        <Stack.Navigator
          initialRouteName="Home"
          animationEnabled={true}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              detachPreviousScreen: false,
            }}
          />
          <Stack.Screen
            name="CategoryShow"
            component={CategoryShow}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              detachPreviousScreen: false,
            }}
          />
        </Stack.Navigator>
      )}
    </>
  )
}
const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
})
export default Navigator
