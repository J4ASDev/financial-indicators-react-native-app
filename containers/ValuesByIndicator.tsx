import React,  { useMemo } from 'react'

import Container from '../components/HOCs/Container'
import ValuesByIndicatorTemplate from '../components/templates/ValuesByIndicator'
import useAxios from '../hooks/useAxiox'
import { IValuesByIndicatorData } from '../ts/interfaces/Indicators'
import { getApiOfShortListOfValuesByIndicator } from '../utils/getApis'
import sortArrayByDate from '../utils/sortArrayByDate'

function ValuesByIndicatorContainer({ route }: any) {
  const { id } = route?.params || {}

  const [data, error, loading] = useAxios<object>(getApiOfShortListOfValuesByIndicator(id))

  const items: IValuesByIndicatorData[] = useMemo(() => sortArrayByDate(Object.values(data)?.[0]), [data])

  return (
    <Container noSpacing>
      <ValuesByIndicatorTemplate
        loading={loading}
        indicator={id}
        items={items}
        error={Boolean(error)}
      />
    </Container>
  )
}

export default ValuesByIndicatorContainer


