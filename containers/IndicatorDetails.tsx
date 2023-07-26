import React, { useMemo } from 'react'

import IndicatorDetailsTemplate from '../components/templates/IndicatorDetails'
import Container from '../components/HOCs/Container'
import useAxios from '../hooks/useAxiox'
import getChartData from '../utils/getChartData'
import sortArrayByDate from '../utils/sortArrayByDate'
import { getApiOfShortListOfValuesByIndicator } from '../utils/getApis'
import { IValuesByIndicatorData } from '../ts/interfaces/Indicators'

function IndicatorDetailsContainer({ route }: any) {
  const { id } = route?.params || {}

  const [data, error, loading] = useAxios<object>(getApiOfShortListOfValuesByIndicator(id))

  const items: IValuesByIndicatorData[] = useMemo(() => sortArrayByDate(Object.values(data)?.[0] || []), [data])

  const chart = useMemo(() => getChartData(items, id), [items, id])

  const itShouldShowChart = useMemo(() => Boolean(chart?.labels?.length >= 1), [chart])
  
  const currentDate = useMemo(() => items?.slice(0, 1)?.[0], [items])

  return (
    <Container noSpacing>
      <IndicatorDetailsTemplate
        loading={loading}
        indicator={id}
        error={Boolean(error)}
        chart={chart}
        currentDate={currentDate}
        itShouldShowChart={itShouldShowChart}
      />
    </Container>
  )
}

export default IndicatorDetailsContainer
