export default function getCurrentDate(): number[] {
  try {
    const date = new Date()

    const day: number = date.getDay()
    const month: number = date.getMonth()
    const year = date.getFullYear()
  
    return [day, month + 1, year]
  } catch (error) {
    console.log(`Error: ${error}`)

    return [0, 0, 0]
  }

}