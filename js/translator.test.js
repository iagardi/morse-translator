import { exportAllDeclaration, isTaggedTemplateExpression } from "@babel/types";
import { translate } from "./translator";

describe("Testing translate()", () => {
  // it should accept "a" and return ".-"
  it("Should accept 'a' and return '.-'", () => {
    let result;
    result = translate("a");
    expect(result).toBe(".-");
  });
  // it should accept "ab" and return ".- -..."
  it("Should accept 'ab' and return '.- -...'", () => {
    let result;
    result = translate("ab");
    expect(result).toBe(".- -...");
  });
  // it should accept "A" and return ".-"
  it("Should accept 'A' and return '.-'", () => {
    let result;
    result = translate("A");
    expect(result).toBe(".-");
  });
  // it should accept "2" and return "..---"
  it("Should accept '2' and return '..---'", () => {
    let result;
    result = translate("2");
    expect(result).toBe("..---");
  });
  // it should accept an array and return "Not a valid entry"
  it("Should accept '[]' and return 'Not a valid entry'", () => {
    let result;
    result = translate([]);
    expect(result).toBe("Not a valid entry");
  });
  // it should accept an object and return "Not a valid entry"
  it("Should accept '{}' and return 'Not a valid entry'", () => {
    let result;
    result = translate({});
    expect(result).toBe("Not a valid entry");
  });
  // it shouldn't accept anything else apart from letters or numbers
  it("Should accept any other character apart from letters and numbers and return 'Not a valid entry'", () => {
    let result;
    result = translate("?");
    expect(result).toBe("Not a valid entry");
  });
});
