import React from 'react'
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native'
import {colors, borders} from '../../styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SwitchersList = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    icon: {
      height: 36,
      width: 36,
      borderRadius: 36 / 2,
      color: colors.lightDefault,
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconItem: {color: colors.lightDefault},
    switcher: {
      backgroundColor: colors.darkLighten1,
      borderRadius: borders.defaultBorderRadius,
      padding: 14,
      minWidth: '48%',
      marginBottom: 16,
    },
    bigNumber: {fontSize: 36, fontWeight: 'bold'},
    title: {color: colors.darkLighten4, fontSize: 22, fontWeight: 'bold'},
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 4,
    },
  })
  return (
    <View style={styles.container}>
      {/* one switcher */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.switcher}
        onPress={() => {
          navigation.navigate('CategoryShow')
        }}>
        <View style={styles.row}>
          <View style={{...styles.icon, backgroundColor: colors.blue}}>
            <Icon name="calendar" size={24} style={styles.iconItem} />
          </View>
          <View>
            <Text style={styles.bigNumber}>0</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Today</Text>
        </View>
      </TouchableOpacity>
      {/* switcher */}

      <TouchableOpacity activeOpacity={0.7} style={styles.switcher}>
        <View style={styles.row}>
          <View style={{...styles.icon, backgroundColor: colors.red}}>
            <Icon name="calendar" size={24} style={styles.iconItem} />
          </View>
          <View>
            <Text style={styles.bigNumber}>0</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Schedueled</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={styles.switcher}>
        <View style={styles.row}>
          <View style={{...styles.icon, backgroundColor: colors.darkLighten3}}>
            <Icon name="calendar" size={24} style={styles.iconItem} />
          </View>
          <View>
            <Text style={styles.bigNumber}>0</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>All</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={styles.switcher}>
        <View style={styles.row}>
          <View style={{...styles.icon, backgroundColor: colors.orange}}>
            <Icon name="calendar" size={24} style={styles.iconItem} />
          </View>
          <View>
            <Text style={styles.bigNumber}>0</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Flagged</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
export default SwitchersList
