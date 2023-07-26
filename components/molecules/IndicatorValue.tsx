import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../../consts/theme'

type Props = {
  date: string,
  value: string
}

function IndicatorValue({ date, value }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{date}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default IndicatorValue
