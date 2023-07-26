import React from 'react'
import { View, StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { colors } from '../../consts/theme'

type Props = {
  children: React.ReactNode,
  noSpacing?: boolean
}

function Container({ children, noSpacing }: Props) {
  return (
    <GestureHandlerRootView>
      <View style={{ ...styles.container, ...(noSpacing ? {} : styles.spacing)}}>
        {children}
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BACKGROUND,
  },
  spacing: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  }
})

export default Container
