import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'

import { IStaticListOfIndicators } from '../../ts/interfaces/Indicators'
import { colors } from '../../consts/theme'
import Navigate from '../HOCs/Navigate'

function IndicatorLink({ name, id }: IStaticListOfIndicators): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>

      <View style={styles.linkSide}>
        <Navigate url='IndicatorDetails' params={{ id }}>
          <Feather
            name='info'
            size={25}
          />
        </Navigate>

        <Navigate url='ValuesByIndicator' params={{ id }}>
          <Entypo.Button
            name='chevron-small-right'
            size={25}
            color={colors.BACKGROUND}
            backgroundColor={colors.PRIMARY}
            iconStyle={styles.iconStyle}
          />
        </Navigate>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.FONT
  },
  linkSide: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  iconStyle: {
    paddingLeft: 7,
    paddingVertical: 5,
  }
})

export default IndicatorLink
