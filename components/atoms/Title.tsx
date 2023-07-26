import React from 'react'
import { Text, StyleSheet } from 'react-native'

type Props = {
  text: string,
}

function Title({ text }: Props) {
  return (
    <Text style={styles.title}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    display: 'flex',
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15
  }
})

export default Title
