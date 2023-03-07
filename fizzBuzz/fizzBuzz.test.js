const fizzBuzz = require("./fizzBuzz");

//describe fizzbuzz should be a funciton
describe("fizzBuzz", () => {
  it("should be a function", () => {
    expect(typeof fizzBuzz).toBe("function");
  });
  it("should return the number if not divisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(13)).toBe(13);
  });
  it("should return Fizz if number is divisible by 3 ", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it("should return Buzz if number is divisible by 5 ", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  it("should return FizzBuzz if number is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });
});
