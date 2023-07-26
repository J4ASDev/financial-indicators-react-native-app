
import { colors } from '../consts/theme'
import AvaiblableIndicatorsEnum from '../ts/enums/AvailableIndicators'
import ItemsToShowInChartPerIndicatorEnum from '../ts/enums/ItemsToShowInChartPerIndicator'
import { IValuesByIndicatorData } from '../ts/interfaces/Indicators'
import { GetChartDataReduce } from '../ts/type/Chart'

function _parseNumber(value: string): number {
  const parsedNumber: number = parseFloat(value.replaceAll(',', '.'))
  
  return isNaN(parsedNumber) ? 0 : parsedNumber
}

function _destructureDate(dateAsString: string): (number|string)[] {
  try {
    const date = new Date(dateAsString)

    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'short' })
    const year = date.getFullYear()

    return [day, month, year]
  } catch (error) {
    return []
  }
}


function _MapData(
  items: IValuesByIndicatorData[],
  indicator: AvaiblableIndicatorsEnum
): GetChartDataReduce {
  try {
    const [labels, datasets] = items.reduce(
      ([labels, datasets]: GetChartDataReduce, { Fecha, Valor }) => {
        const [day, month] = _destructureDate(Fecha)

        datasets.push(_parseNumber(Valor))

        switch (indicator) {
          case AvaiblableIndicatorsEnum.DOLAR:
          case AvaiblableIndicatorsEnum.EURO:
          case AvaiblableIndicatorsEnum.UF:
            labels.push(`D${String(day)}`)
            break;
          default:
            labels.push(String(month))
            break;
        }

  
        return [labels, datasets]
      }, [[], []]
    )
  
    return [labels, datasets]
  } catch {
    return [[], []]
  }
}

export default function getChartData(
  items: IValuesByIndicatorData[],
  indicator: AvaiblableIndicatorsEnum
): any {
  const itemsToMap = items?.slice(1, Number(ItemsToShowInChartPerIndicatorEnum[indicator]))

  let data: any = {
    labels: [],
    datasets: [
      {
        data: [],
        color: () => colors.PRIMARY,
        strokeWidth: 2,
      }
    ],
    propsForLabels: {
      fontSize: 1
    }
  }

  const [labels, datasets] = _MapData(itemsToMap, indicator)

  data.labels = labels
  data.datasets[0].data = datasets

  return data
}