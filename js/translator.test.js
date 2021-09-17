import { exportAllDeclaration, isTaggedTemplateExpression } from "@babel/types";
import { translateItBro } from "./translator";

describe("Testing translateItBro()", () => {
  // it should accept "a" and return ".-"

  it("Should accept 'a' and return '.-'", () => {
    let input = "a";
    let result;
    result = translateItBro(input, object);
    expect(result).toBe(".-");
  });
  // it should accept "ab" and return ".- -..."
  it("Should accept 'ab' and return '.- -...'", () => {
    let result;
    result = translateItBro("ab", object);
    expect(result).toBe(".- -...");
  });
  // it should accept "A" and return ".-"
  it("Should accept 'A' and return '.-'", () => {
    let result;
    let object = {}; // ????
    result = translateItBro("A", object);
    expect(result).toBe(".-");
  });
  // it should accept "2" and return "..---"
  it("Should accept '2' and return '..---'", (input, object) => {
    let result;
    result = translateItBro("2", object);
    expect(result).toBe("..---");
  });
  // it should accept an array and return "Not a valid entry"
  it("Should accept '[]' and return 'Not a valid entry'", (input, object) => {
    let result;
    result = translateItBro([], object);
    expect(result).toBe("Not a valid entry");
  });
  // it should accept an object and return "Not a valid entry"
  it("Should accept '{}' and return 'Not a valid entry'", (input, object) => {
    let result;
    result = translateItBro({}, object);
    expect(result).toBe("Not a valid entry");
  });
  // it shouldn't accept anything else apart from letters or numbers
  it("Should accept any other character apart from letters and numbers and return 'Not a valid entry'", (input, object) => {
    let result;
    result = translateItBro("?", object);
    expect(result).toBe("Not a valid entry");
  });
});
