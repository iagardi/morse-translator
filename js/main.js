import morseCode from "../data/data.js";
import { translateItBro } from "./translator.js";



const input = document.querySelector("#main__entry")
const output = document.querySelector("#main__output")
const translateButton = document.querySelector("#main__translate")
const reset = document.querySelector("#reset")

translateButton.addEventListener("click", event => {
   const textToTranslate = input.value
   output.value = translateItBro(textToTranslate, morseCode)

})

reset.addEventListener("click", event => {
   input.value = ""
   output.value = ""
})

