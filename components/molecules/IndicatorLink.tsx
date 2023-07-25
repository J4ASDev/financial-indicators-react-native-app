import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'

import { IStaticListOfIndicators } from '../../ts/interfaces/Indicators'
import { colors } from '../../consts/theme'

function IndicatorLink({ name }: IStaticListOfIndicators): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>

      <View style={styles.linkSide}>
        <Feather name='info' size={20} color={colors.FONT} />
        <Entypo name='chevron-small-right' size={25} color={colors.PRIMARY} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.PRIMARY,
    borderRadius: 10,
    borderWidth: 1
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.FONT
  },
  linkSide: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default IndicatorLink
