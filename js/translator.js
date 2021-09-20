export const translateItBro = (input, object) => {
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
  
  if (hasInvalidChars == 1) {return "Invalid characters included, can't translate. Please only include letters and numbers."} else {return otherLang.join(" ")}
  } else {return "Invalid data type entered. Please only enter string or number."}
  }


