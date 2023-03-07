const anagram = require("./anagram");

describe("anagram", () => {
  it("should be a function", () => {
    expect(typeof anagram).toEqual("function");
  });
  it("should return a boolean", () => {
    expect(typeof anagram("ram", "arm")).toEqual("boolean");
  });
  it("should return true if string is an anagram", () => {
    // expect(anagram("ram", "arm")).toBeTruthy();
    expect(anagram("cinema", "iceman")).toBeTruthy();
    expect(anagram("dog", "god")).toBeTruthy();
  });
  it("should return false if string is not an anagram", () => {
    expect(anagram("hellow", "fellow")).toBeFalsy();
    expect(anagram("world", "twirl")).toBeFalsy();
    expect(anagram("dog", "cat")).toBeFalsy();
  });
});
