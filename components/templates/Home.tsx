import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

import { IStaticListOfIndicators } from '../../ts/interfaces/Indicators'
import IndicatorLink from '../molecules/IndicatorLink'
import { colors } from '../../consts/theme'

type Props = {
  indicators: IStaticListOfIndicators[]
}

function HomeTemplate({ indicators }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Indicators</Text>

      <FlatList
        data={indicators}
        renderItem={({ item }) => <IndicatorLink {...item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10
  },
  title: {
    display: 'flex',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: colors.SIDE,
    marginVertical: 12
  }
})

export default HomeTemplate
