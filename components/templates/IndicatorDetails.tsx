import React from 'react'
import { View, Dimensions, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

import Title from '../atoms/Title'
import ErrorNotice from '../atoms/ErrorNotice'
import chartSettings from '../../consts/chart'
import { colors } from '../../consts/theme'
import formatDate from '../../utils/formatDate'
import AvaiblableIndicatorsEnum from '../../ts/enums/AvailableIndicators'
import { IValuesByIndicatorData } from '../../ts/interfaces/Indicators'

const { width } = Dimensions.get('window')

type Props = {
  loading: boolean,
  indicator: AvaiblableIndicatorsEnum,
  chart: any,
  currentDate: IValuesByIndicatorData,
  itShouldShowChart: boolean,
  error: boolean,
}

function IndicatorDetailsTemplate({ loading, indicator, error, chart, currentDate, itShouldShowChart }: Props) {
  if (error) return <ErrorNotice />

  if (loading) return  <ActivityIndicator size='large' color={colors.PRIMARY} />

  return (
    <View>
      <Title text={`${indicator}: ${currentDate?.Valor ?? '-'}`} />
      <Text style={styles.date}>Latest date: {formatDate(currentDate?.Fecha)}</Text>

      {itShouldShowChart ? (
        <LineChart
          style={styles.chartStyles}
          data={chart}
          width={width}
          height={220}
          chartConfig={chartSettings}
        />
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  date: {
    display: 'flex',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.PRIMARY,
  },
  chartStyles: {
    marginTop: 50
  }
})

export default IndicatorDetailsTemplate
