import React from 'react'
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {Button, ScreenWrapper, Text, Input} from '../components'
import {colors} from '../styles'
import {SwitchersList} from './components'
import CategoryList from './../domains/Category/components/CategoryList'

const MainScreen = ({navigation, route}) => {
  return (
    <ScreenWrapper
      // <Icon name="chevron-left" />
      topRight={
        <Button thin color={colors.blue}>
          Change
        </Button>
      }>
      <View style={{marginBottom: 32}}>
        <Input
          placeholder="Search"
          iconLeft={<Icon name="md-search-outline" size={28} />}
        />
      </View>
      <SwitchersList navigation={navigation} />
      <View style={{marginLeft: 12, marginBottom: 12}}>
        <Text level={3} strong>
          My lists
        </Text>
      </View>
      <CategoryList navigation={navigation} />
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({})

export default MainScreen
