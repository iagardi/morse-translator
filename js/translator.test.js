import { exportAllDeclaration, isTaggedTemplateExpression } from "@babel/types";
import { translateItBro } from "./translator";
import morseCode from "../data/data.js"

describe("Testing translateItBro()", () => {
  // it should accept "a" and return ".-"

  it("Should accept 'a' and return '.-'", () => {
    let input = "a";
    let result;
    result = translateItBro(input, morseCode);
    expect(result).toBe(".-");
  });
  // it should accept "ab" and return ".- -..."
  it("Should accept 'ab' and return '.- -...'", () => {
    let result;
    result = translateItBro("ab", morseCode);
    expect(result).toBe(".- -...");
  });
  // it should accept "A" and return ".-"
  it("Should accept 'A' and return '.-'", () => {
    let result;
    let object = {}; // ????
    result = translateItBro("A", morseCode);
    expect(result).toBe(".-");
  });
  // it should accept "2" and return "..---"
  it("Should accept '2' and return '..---'", () => {
    let result;
    result = translateItBro("2", morseCode);
    expect(result).toBe("..---");
  });
  // it should accept an array and return "Not a valid entry"
  it("Should accept '[]' and return 'Not a valid entry'", () => {
    let result;
    result = translateItBro([], morseCode);
    expect(result).toBe("Invalid data type entered. Please only enter string or number.");
  });
  // it should accept an object and return "Not a valid entry"
  it("Should accept '{}' and return 'Not a valid entry'", () => {
    let result;
    result = translateItBro({}, morseCode);
    expect(result).toBe("Invalid data type entered. Please only enter string or number.");
  })
  // it shouldn't accept anything else apart from letters or numbers
  it("Should accept any other character apart from letters and numbers and return 'Not a valid entry'", () => {
    let result;
    result = translateItBro("?", morseCode);
    expect(result).toBe("Invalid characters included, can't translate. Please only include letters and numbers.");
  });
});
