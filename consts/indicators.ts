import AvaiblableIndicatorsEnum from '../ts/enums/AvailableIndicators'
import { IStaticListOfIndicators } from '../ts/interfaces/Indicators'

const INDICATORS: IStaticListOfIndicators[] = [
  {
    name: 'Dólar',
    id: AvaiblableIndicatorsEnum.DOLAR
  },
  {
    name: 'Euro',
    id: AvaiblableIndicatorsEnum.EURO
  },
  {
    name: 'UF',
    id: AvaiblableIndicatorsEnum.UF
  },
  {
    name: 'IPC',
    id: AvaiblableIndicatorsEnum.IPC
  },
  {
    name: 'UTM',
    id: AvaiblableIndicatorsEnum.UTM
  },
]

export default INDICATORS