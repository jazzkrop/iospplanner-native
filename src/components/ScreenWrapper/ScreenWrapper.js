import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import {colors} from '../../styles'

const ScreenWrapper = props => {
  const {title, backButton, topRight, children, accentColor} = props

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.darkDefault,
      padding: 12,
    },
    content: {flex: 1},
    header: {},
    navigation: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: (backButton && 'space-between') || 'flex-end',
      alignItems: 'center',
      marginBottom: 8,
    },
    title: {
      color: accentColor || colors.blue,
      fontSize: 42,
      fontWeight: 'bold',
      paddingHorizontal: 6,
      marginBottom: 12,
    },
    test: {display: 'flex', flexDirection: 'row'},
    testItem: {},
  })

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.navigation}>
          {backButton && backButton}
          {topRight && topRight}
        </View>
        {title && (
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
        )}
      </View>
      <ScrollView style={styles.content}>{children}</ScrollView>
    </View>
  )
}

export default ScreenWrapper
