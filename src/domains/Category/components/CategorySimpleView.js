import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import {MdCalendarToday, MdClose} from 'react-icons/md'
// import {Card, Row, Col, Icon, Input, Title, Button, Text} from '../../../components'
// import {useStore} from '../../../contexts/Store'
import {Text} from '../../../components'
import {colors} from '../../../styles'

const CategorySimpledView = ({category, navigation}) => {
  // const {destroyRecord, updateRecord, getNumberOfUndoneTasks} = useStore()
  // const history = useHistory()
  // const [categoryName, setCategoryName] = useState(category?.name)
  // const [onEdit, setOnEdit] = useState(true)

  // const numberOfUndoneTasks = getNumberOfUndoneTasks(category.id)
  const numberOfUndoneTasks = 1

  // const deleteCategory = e => {
  //   e.stopPropagation()
  //   destroyRecord({collectionPath: 'categories', id: category.id})
  //   history.push('/tasks-all/')
  // }
  // const changeEditMode = () => {
  //   setCategoryName(category.name)
  //   setOnEdit(!onEdit)
  // }
  // const handleEnter = event => {
  //   if (event.keyCode === 13) {
  //     const values = {}
  //     if (categoryName !== category.name) {
  //       values.name = categoryName
  //     }
  //     updateRecord({collectionPath: 'categories', id: category.id, values})
  //     event.target.blur()
  //   }
  // }
  const navigateToThisCategory = () => {
    navigation.navigate('CategoryShow', {id: 1})
  }

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={navigateToThisCategory}>
      <View style={{...styles.icon, backgroundColor: colors.blue}}>
        <Icon name="format-list-bulleted" size={24} style={styles.iconItem} />
      </View>
      <View style={{marginRight: 'auto'}}>
        <Text>NewList</Text>
      </View>
      <View>
        <Text disabled>{numberOfUndoneTasks}</Text>
      </View>
      <View>
        <Icon name="chevron-right" size={28} color={colors.darkLighten5} />
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkLighten1,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 36,
    width: 36,
    borderRadius: 36 / 2,
    color: colors.lightDefault,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconItem: {color: colors.lightDefault},
})
export default CategorySimpledView
