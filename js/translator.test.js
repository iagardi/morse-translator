import { exportAllDeclaration, isTaggedTemplateExpression } from "@babel/types";
import { translate } from "./translator";

describe("Testing translate()", () => {
  // it should accept "a" and return ".-"
  it("Should accept 'a' and return '.-'", () => {
    let result = translate("a");
    expect(result).toBe(".-");
  });
});
