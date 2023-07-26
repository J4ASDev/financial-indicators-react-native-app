import { IValuesByIndicatorData } from '../ts/interfaces/Indicators'

export default function sortArrayByDate(items: IValuesByIndicatorData[] = []): IValuesByIndicatorData[] {
  let sortedItems: IValuesByIndicatorData[] = []

  if (Array.isArray(items)) {
    sortedItems = items?.sort((a, b) => (
      new Date(b.Fecha).valueOf() - new Date(a.Fecha).valueOf()
    ))
  }

  return sortedItems
}
