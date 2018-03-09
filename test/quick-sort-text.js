const assert = require('chai').assert
const quickSort = require('../lib/quick-sort')

describe("Insertion Sort", () => {
  it("can sort [3, 1]", () => {
    let array = [3,1]
    let result = [1,3]

    assert.deepEqual(quickSort(array), result)
  })
  it("can sort [3, 1, 2]", () => {
    let array = [3,1,2]
    let result = [1,2,3]

    assert.deepEqual(quickSort(array), result)
  })
  it("can sort [4,3,2,1]", () => {
    let array = [4,3,2,1]
    let result = [1,2,3,4]

    assert.deepEqual(quickSort(array), result)
  })
  it("can sort [6,5,2,3,4,1]", () => {
    let array = [6,5,2,3,4,1]
    let result = [1,2,3,4,5,6]

    assert.deepEqual(quickSort(array), result)
  })
  it("can sort [9,4,8,6,5,7,2,1,3]", () => {
    let array = [9,4,8,6,5,7,2,1,3]
    let result = [1,2,3,4,5,6,7,8,9]

    assert.deepEqual(quickSort(array), result)
  })
})
