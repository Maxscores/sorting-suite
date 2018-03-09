const assert = require('chai').assert;
const bubbleSort = require('../lib/bubble-sort');

describe("bubble sort tests", () => {
  it("can sort [3,1,2]", () => {
    let array = [3, 1, 2]
    let result = [1, 2, 3]

    assert.deepEqual(bubbleSort(array), result)
  })

  it("can sort [4, 3, 2, 1]", () => {
    let array = [4, 3, 2, 1]
    let result = [1, 2, 3, 4]

    assert.deepEqual(bubbleSort(array), result)
  })

  it("can sort [5,3,6,1,2,4]", () => {
    let array = [5,3,6,1,2,4]
    let result = [1, 2, 3, 4, 5, 6]

    assert.deepEqual(bubbleSort(array), result)
  })
})
