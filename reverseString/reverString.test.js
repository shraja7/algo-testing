const reverseString = require("./reverseString");

describe("reverseString", () => {
  it("should be a function", () => {
    expect(typeof reverseString).toBe("function");
  });
  it("should return a string", () => {
    expect(typeof reverseString("hello")).toBe("string");
  });

  it("should return the string reversed", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
  });
  //reverse of multiple words
  it("should return the string reversed", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
    expect(reverseString("world hello")).toBe("olleh dlrow");
  });
});
