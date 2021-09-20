export const translateToMorse = (input, object) => {
  if (typeof input == "string" || typeof input == "number") {
  const otherLang = []
  let hasInvalidChars = 0
  const lowercaseInput = input.toLowerCase()
  for (let i = 0; i < lowercaseInput.length; i++) {
    if (object[lowercaseInput[i]]) {
      otherLang.push(object[lowercaseInput[i]])
    } else {
      hasInvalidChars = 1
    }
  }
  
  if (hasInvalidChars == 1) {return "Invalid characters included, can't translate. Please only include letters and numbers."} else {return otherLang.join(" ").replaceAll("    ", "  ")}
  } else {return "Invalid data type entered. Please only enter string or number."}
}
  
export const translateToEnglish = (inputText, object) => {
  
  // declare a function to find the key by providing a value, courtesy of stackoverflow
  function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
  // split input into words at double spaces
  const inputToWords = inputText.split("  ")
  // translate words and return
  let translated = []
  let hasInvalidChars = 0
  inputToWords.forEach(word => {
    const eachWord = word.split(" ")
    let translatedWord = ""
    for (let i = 0; i < eachWord.length; i++) {
      if (getKeyByValue(object, eachWord[i])) {
        translatedWord += getKeyByValue(object, eachWord[i])
      } else {hasInvalidChars = 1}
    }
    translated.push(translatedWord)
  });
  if (hasInvalidChars == 1) { return "Invalid morse code included, please ensure you enter correct morse code for letters and numbers" } else { return translated.join(" ") }
  }


