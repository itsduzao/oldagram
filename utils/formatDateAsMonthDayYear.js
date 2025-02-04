import { getMonthNameFromNumber } from './getMonthNameFromNumber.js'
import { getNumberUnit } from './getNumberUnit.js'

export function formatDateAsMonthDayYear(date) {
  const [year, month, day] = String(date).split('-')
  const formattedDay = getNumberUnit(day)
  const formattedMonth = getMonthNameFromNumber(month)
  const formattedDate = `${formattedMonth} ${formattedDay}, ${year}`
  return formattedDate
}

