export function capitalizeWord(word) {
  const firstLetterToUpperCase = word.charAt(0).toUpperCase()
  const remainingWord = word.slice(1)

  return `${firstLetterToUpperCase}${remainingWord}`
}

