const palindrome = require("./palindrome");

describe("palindrome", () => {
  it("should be a function", () => {
    expect(typeof palindrome).toBe("function");
  });
  it("should return a boolean", () => {
    expect(typeof palindrome("hello")).toBe("boolean");
  });
});
