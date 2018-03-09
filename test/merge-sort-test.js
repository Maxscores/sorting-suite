const assert = require('chai').assert
const [mergeSort, firstSplit, secondSplit, merge] = require('../lib/merge-sort')

describe("merge", () => {
  it("can combine [1] and [2] in order", () => {
    let array1 = [1]
    let array2 = [2]
    let result = [1, 2]

    assert.deepEqual(merge(array1, array2), result)
  })

  it("can combine [1, 3] and [2] in order", () => {
    let array1 = [1, 3]
    let array2 = [2]
    let result = [1, 2, 3]

    assert.deepEqual(merge(array1, array2), result)
  })

  it("can combine [1, 3, 4, 5] and [2] in order", () => {
    let array1 = [1, 3, 4, 5]
    let array2 = [2]
    let result = [1, 2, 3, 4, 5]

    assert.deepEqual(merge(array1, array2), result)
  })

  it("can combine [1] and [2, 3, 4, 6] in order", () => {
    let array1 = [1]
    let array2 = [2, 3, 4, 6]
    let result = [1, 2, 3, 4, 6]

    assert.deepEqual(merge(array1, array2), result)
  })

  it("can combine [1, 3, 5, 7] and [2, 4, 6, 8] in order", () => {
    let array1 = [1, 3, 5, 7]
    let array2 = [2, 4, 6, 8]
    let result = [1, 2, 3, 4, 5, 6, 7, 8]

    assert.deepEqual(merge(array1, array2), result)
  })
})

describe("split methods", () => {
  it("can split an even array", () => {
    let array = [1, 2, 3, 4]
    let firstResult = [1, 2]
    let secondResult = [3, 4]

    assert.deepEqual(firstSplit(array), firstResult)
    assert.deepEqual(secondSplit(array), secondResult)
  })

  it("can split an odd array", () => {
    let array = [1, 2, 3, 4, 5]
    let firstResult = [1, 2]
    let secondResult = [3, 4, 5]

    assert.deepEqual(firstSplit(array), firstResult)
    assert.deepEqual(secondSplit(array), secondResult)
  })
})

describe("Merge Sort", () => {
  it("can sort [3, 1]", () => {
    let array = [3,1]
    let result = [1,3]

    assert.deepEqual(mergeSort(array), result)
  })
  it("can sort [3, 1, 2]", () => {
    let array = [3,1,2]
    let result = [1,2,3]

    assert.deepEqual(mergeSort(array), result)
  })
  it("can sort [4,3,2,1]", () => {
    let array = [4,3,2,1]
    let result = [1,2,3,4]

    assert.deepEqual(mergeSort(array), result)
  })
  it("can sort [6,5,2,3,4,1]", () => {
    let array = [6,5,2,3,4,1]
    let result = [1,2,3,4,5,6]

    assert.deepEqual(mergeSort(array), result)
  })
  it("can sort [9,4,8,6,5,7,2,1,3]", () => {
    let array = [9,4,8,6,5,7,2,1,3]
    let result = [1,2,3,4,5,6,7,8,9]

    assert.deepEqual(mergeSort(array), result)
  })
})
