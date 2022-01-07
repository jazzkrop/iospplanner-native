import {TouchableOpacitym, StyleSheet} from 'react-native'

const Button = props => {
  const {onPress, children} = props

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {},
})
export default Button
