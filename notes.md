# Feedback

Right click on the file and click Open Preview or `ctrl/cmd + shift + v` to open preview

## Goals

1. Working morse code translator - ✔
2. Practice using TDD - Definitely done, but tests failing for unknown reason ✔
3. Application of what you're learning (pure functions etc.) - Good use of pure functions ✔

## Specification

- Translator functions and Unit tests to be written in separate files. Functions to be brought into the main.js and unit test files
  - Functions separated well
- Readme
  - Basic README with no further information
- 10 commits during development
  - Only 9 commits! Comments look good though
- Mobile first/Responsive
  - Is kind of mobile first but breaks on tiny screens
- No tutorials
  - Work looks original

## Overall

Very good, functional morse code translator. HTML is clean, folder structure and js is clever. However, it's let down by kind of messy JS files (I had to format them to make it easier to see what was going on). There was also an unfortunate bug, but that wasn't your fault.

The next section will mostly be about code cleanliness.

The key takeaway is this is really good work! but you can structure your code better to be more easily understood by others.

## To work on

### HTML

- Nothing huge here, good use of semantics
- Stop using `<br>` tags though. If you want an ordered list, us the `<ol>` tag. If you want elements to naturally fall next to each other, set their styles to `display: block;`

### SCSS

- Try to stick to using `classes` for styling and `id`s for interacting js
- This keeps a clean separation between styling and interactivity
- Although with BEM giving us unique `class` names and `document.querySelector()` allowing us to get an element based on a `CSS` selector we can start to use `class`es for everything to keep our `HTML` cleaner

### JS

The JS is really good technically! But it can be consfusing to read, requiring me as someone who is unfamiliar with the codebase to switch between a lot of files to understand what is going on. You can fix this by using more clear variable names throughout, I'll put a couple examples below along with the fix for the bug that was happening with your testing for me.

```js
// engToMorse what? is this a button? Input? Header? P tag?
const engToMorse = document.querySelector(".engToMorse");
const morseToEng = document.querySelector(".morseToEng");

// You can add what the DOM element is to the variable name:
const englishToMorseButton = document.querySelector(".engToMorse");
const morseToEnglishButton = document.querySelector(".morseToEng");
// Not much more to write, much more descriptive
// More examples:
const reset = document.querySelector("#reset");
const swap = document.querySelector("#swap");
// To:
const resetButton = document.querySelector("#reset");
const swapButton = document.querySelector("#swap");
// Or:
const resetBtn = document.querySelector("#reset");
const swapBtn = document.querySelector("#swap");
```

Further down the code:

```js
swap.addEventListener("click", (event) => {
  // Try to avoid acroynms in your code it slows downs someone else being
  // able to read and understand your code
  const E2M = document.querySelector("#EngToMorse");
  const M2E = document.querySelector("#MorseToEng");
  // Use the full name instead plus the DOM element, let intellisense do the heavy lifting
  // const englishToMorseButton = document.querySelector("#EngToMorse");
  // const morseToEnglishButton = document.querySelector("#MorseToEng");
  // Change this to howToText
  const howto = document.querySelectorAll(".howto");
  const translate = document.querySelectorAll(".main__translate");
  E2M.classList.toggle("invisible");
  M2E.classList.toggle("invisible");
  // Element here is very generic, to make this more obvious you can change
  // it to the DOM type you're iterating over
  howto.forEach((element) => {
    element.classList.toggle("invisible");
  });
  translate.forEach((element) => {
    element.classList.toggle("invisible");
  });
  input.value = "";
  output.value = "";
});
```

```js
export const translateToMorse = (input, object) => {
  // No need to check if it's a number as we always get strings from inputs
  // Also numbers don't have the .toLowerCase() method
  if (typeof input == "string" || typeof input == "number") {
  const otherLang = []
  // This should be a boolean
  let hasInvalidChars = 0
  const lowercaseInput = input.toLowerCase()
  for (let i = 0; i < lowercaseInput.length; i++) {
    if (object[lowercaseInput[i]]) {
      otherLang.push(object[lowercaseInput[i]])
    } else {
      hasInvalidChars = 1
    }
  }
  
  // It's worthwhile to put this on separate lines to make it easier to read
  if (hasInvalidChars == 1) {return "Invalid characters included, can't translate. Please only include letters and numbers."} else {return otherLang.join(" ").replaceAll("    ", "  ")}
  } else {return "Invalid data type entered. Please only enter string or number."}
  // like so:
  //   if (hasInvalidChars == 1) {
  //     return "Invalid characters included, can't translate. Please only include letters and numbers.";
  //   } else {
  //     return otherLang.join(" ").replaceAll("    ", "  ");
  //   }
  // } else {
  //   return "Invalid data type entered. Please only enter string or number.";
  // }
  // Side note: All of your indetation is off by 2
}
```

The bug I had running tests was related to `replaceAll()` being too modern. You can get the same functionality by using regex as input to the `replace()` method like so:

```js
otherLang.join(" ").replace(/    /gi, /  /gi);
```

Inside `translateToEnglish()` You can leave empty lines between variable definitions and operations in order to make the function clearer so we're not just looking at a huge block of code.

Final point, the `getKeyByValue()` function shouldn't be defined inside the the `translateToEnglish` function. Please move this outside. This means you can test its functionality as well.

I understand that all looks very negative so I need to clarify that the code is really really good! and I'm only mentioning this because it's a good thing to start thinking about and provides immeasurable value to the quality of your code. 
