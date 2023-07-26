import getCurrentDate from './getCurrentDate'
import { API_FORMAT, API_KEY, API_URI } from '../consts/api'
import AvaiblableIndicatorsEnum from '../ts/enums/AvailableIndicators'

const [, month, year]: number[] = getCurrentDate()

export function getApiFullListOfValuesByIndicator(indicator: AvaiblableIndicatorsEnum): string {
  switch (indicator) {
    case AvaiblableIndicatorsEnum.DOLAR:
    case AvaiblableIndicatorsEnum.EURO:
      return `${API_URI}/${indicator.toLowerCase()}/${year}/${month}?apikey=${API_KEY}&formato=${API_FORMAT}`
    default:
      return `${API_URI}/${indicator.toLowerCase()}/${year}?apikey=${API_KEY}&formato=${API_FORMAT}`
  }
}

export function getApiOfShortListOfValuesByIndicator(indicator: AvaiblableIndicatorsEnum): string {
  const initialYear = year - 1

  switch (indicator) {
    case AvaiblableIndicatorsEnum.DOLAR:
    case AvaiblableIndicatorsEnum.EURO:
    case AvaiblableIndicatorsEnum.UF:
      return `${API_URI}/${indicator.toLowerCase()}/${year}?apikey=${API_KEY}&formato=${API_FORMAT}`
    default:
      return `${API_URI}/${indicator.toLowerCase()}/posteriores/${initialYear}/${month}?apikey=${API_KEY}&formato=${API_FORMAT}`
  }
}