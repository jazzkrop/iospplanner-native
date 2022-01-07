import React from 'react'
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native'
import {colors, borders} from '../../styles'

const Button = props => {
  const {
    icon,
    disabled,
    thin,
    color,
    onPress,
    children,
    backgroundColor,
    strong,
  } = props

  const styles = StyleSheet.create({
    container: {
      padding: 4,
      backgroundColor: backgroundColor || 'none',
      borderRadius: borders.defaultBorderRadius,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    button: {
      alignSelf: 'flex-start',
    },
    text: {
      fontSize: 20,
      color: color || colors.blue,
      fontWeight: (thin && '300') || (strong && '700'),
    },
    icon: {
      color: color || colors.blue,
    },
  })
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}>
      <View style={styles.container}>
        {icon && (
          <View>
            <Text style={styles.icon}>{icon}</Text>
          </View>
        )}
        {children && (
          <View>
            <Text style={styles.text}>{children}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}
export default Button
