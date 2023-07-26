import React from 'react'
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native'

import Title from '../atoms/Title'
import ErrorNotice from '../atoms/ErrorNotice'
import IndicatorValue from '../molecules/IndicatorValue'
import { IValuesByIndicatorData } from '../../ts/interfaces/Indicators'
import AvaiblableIndicatorsEnum from '../../ts/enums/AvailableIndicators'
import { colors } from '../../consts/theme'

type Props = {
  indicator: AvaiblableIndicatorsEnum,
  items: IValuesByIndicatorData[],
  error: boolean,
  loading: boolean,
  
}

function ValuesByIndicatorTemplate({ loading, indicator, items, error }: Props) {
  if (loading) return  <ActivityIndicator size='large' color={colors.PRIMARY} />

  if (error) return <ErrorNotice />

  return (
    <View style={styles.container}>
      <Title text={indicator} />

      <FlatList
        data={items}
        style={styles.flatList}
        renderItem={({ item }) => (
          <IndicatorValue date={item?.Fecha} value={item?.Valor} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={item => item?.Fecha}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  flatList: {
    marginBottom: 200
  },
  separator: {
    height: 1,
    backgroundColor: colors.SIDE,
    marginVertical: 12
  }
})

export default ValuesByIndicatorTemplate
