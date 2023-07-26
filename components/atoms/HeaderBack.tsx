import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo'

import { colors } from '../../consts/theme'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

function HeaderBack() {
  const navigation = useNavigation()

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={navigation.goBack} hitSlop={20}>
      <Entypo name='chevron-thin-left' size={18} color={colors.PRIMARY} />
      <Text style={styles.text}>Back</Text>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 25,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.BACKGROUND,
  },
  text: {
    color: colors.PRIMARY,
    fontSize: 16,
  }
})

export default HeaderBack
