import morseCode from "../data/data.js";

export const translate = (input) => {
  return morseCode[input];
};
