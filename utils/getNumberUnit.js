export function getNumberUnit(number) {
  const defaultValue = Number(number)
  const numberUnit = Number(String(number).slice(1))
  return defaultValue === numberUnit ? numberUnit : defaultValue
}

