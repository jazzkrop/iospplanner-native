import React from 'react'
import {View, TextInput, StyleSheet, Text} from 'react-native'
import {colors} from '../../styles'

const Input = props => {
  const {placeholder, value, onChangeText, iconLeft} = props

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 6,
      alignItems: 'center',
      // paddingLeft: (iconLeft && 24) || 6,
      backgroundColor: colors.darkLighten1,
      borderRadius: 10,
    },
    icon: {
      color: colors.darkLighten5,
    },
    input: {
      fontSize: 18,
    },
  })
  return (
    <View style={styles.container}>
      {iconLeft && <Text style={styles.icon}>{iconLeft}</Text>}
      <TextInput
        placeholderTextColor={colors.darkLighten4}
        selectionColor={colors.blueTransparent}
        clearButtonMode="always"
        style={styles.input}
        value={value}
        onChange={onChangeText}
        placeholder={placeholder}
      />
    </View>
  )
}
export default Input
