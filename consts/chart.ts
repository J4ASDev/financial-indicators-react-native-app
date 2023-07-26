import { IChartSettings } from '../ts/interfaces/Chart'
import { colors } from './theme'

const chartSettings: IChartSettings = {
  backgroundGradientFromOpacity: .0,
  backgroundGradientToOpacity: .0,
  color: () => colors.PRIMARY,
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
}

export default chartSettings