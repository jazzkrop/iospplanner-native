import React from 'react'
import {Text, StyleSheet} from 'react-native'
import {colors} from '../../styles'

const textLevels = {
  1: {
    fontSize: 42,
  },
  2: {
    fontSize: 32,
  },
  3: {
    fontSize: 28,
  },
  4: {
    fontSize: 24,
  },
  5: {
    fontSize: 18,
  },
}

const MyText = props => {
  const {strong, level, thin, children, disabled} = props

  const styles = StyleSheet.create({
    text: {
      color: (disabled && colors.darkLighten5) || colors.lightDefault,
      fontSize: textLevels[level]?.fontSize || 18,
      fontWeight: (strong && 'bold') || (thin && '300') || '500',
    },
  })
  return <Text style={styles.text}>{children}</Text>
}
export default MyText
