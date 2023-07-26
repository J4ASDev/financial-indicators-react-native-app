export interface IChartSettings {
  backgroundGradientFromOpacity: number;
  backgroundGradientToOpacity: number
  color: () => string
  barPercentage: number,
  useShadowColorFromDataset: boolean,
  propsForLabels: object
}
