import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Button, ScreenWrapper, Text} from '../components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {colors} from '../styles'

const CategoryShow = ({navigation, route}) => {
  const clearDoneTasks = () => {}
  return (
    <ScreenWrapper
      title="New list"
      backButton={
        <Button
          color={colors.blue}
          icon={<Icon name="chevron-left" size={32} />}
          onPress={() => {
            navigation.goBack()
          }}>
          Lists
        </Button>
      }
      topRight={
        <Button
          thin
          color={colors.blue}
          icon={<Icon name="dots-horizontal-circle-outline" size={32} />}
        />
      }>
      <View style={styles.clearSwitcher}>
        <View style={styles.rightOffset}>
          <Text>1 done</Text>
        </View>
        <Button thin onPress={clearDoneTasks}>
          Clear
        </Button>
      </View>
      <Text>id : {route.params.id}</Text>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  clearSwitcher: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightOffset: {
    marginRight: 4,
  },
})
export default CategoryShow
