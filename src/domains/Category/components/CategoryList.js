import React from 'react'
import {useStore} from '../../../contexts/Store'
import {StyleSheet, View} from 'react-native'
import CategorySimpleView from './CategorySimpleView'
import {borders} from '../../../styles'

const CategoryList = ({navigation}) => {
  // const {store} = useStore()
  // const categories = Object.values(store.categories)
  const categories = [
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
  ]
  return (
    <View style={styles.container}>
      {categories &&
        categories.map(item => {
          return (
            <CategorySimpleView
              navigation={navigation}
              key={item?.id}
              category={item}
            />
          )
        })}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderRadius: borders.defaultBorderRadius,
    overflow: 'hidden',
  },
})
export default CategoryList
