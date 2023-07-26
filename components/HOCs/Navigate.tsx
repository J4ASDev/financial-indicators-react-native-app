import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

type Props<Params> = {
  children: React.ReactNode,
  url: string,
  params?: Params
}

function Navigate<Params>({ children, url, params }: Props<Params>): JSX.Element {
  const navigation = useNavigation<any>()

  const goTo = useCallback((): void => navigation.navigate(url, params), [url, params])

  return <TouchableWithoutFeedback onPress={goTo}>{children}</TouchableWithoutFeedback>
}

export default Navigate
