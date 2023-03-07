const assert = require("assert");
const arraychunk = require("./arraychunk");

describe("array chunking", () => {
  it("should create chunk of a specific size", () => {
    assert.deepEqual(chunk([1, 2, 3, 4], 2), [
      [1, 2],
      [3, 4],
    ]);
    //chunks of 2
    assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
  });
});
