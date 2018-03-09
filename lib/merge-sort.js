
const firstSplit = (array) => {
  return array.slice(0, Math.floor((array.length) / 2))
}

const secondSplit = (array) => {
  return array.slice((array.length) / 2, array.length)
}

const merge = (first, second, result = []) => {
  while (first.length !== 0 && second.length !== 0) {
    if (first[0] > second[0]) {
      result.push(second.shift())
    } else {
      result.push(first.shift())
    }
  }
  while (first.length !== 0) {
    result.push(first.shift())
  }
  while (second.length !== 0) {
    result.push(second.shift())
  }
  return result
}

const mergeSort = (array) => {
  if (array.length > 1) {
    let first = firstSplit(array)
    let second = secondSplit(array)
    first = mergeSort(first)
    second = mergeSort(second)
    return merge(first, second)
  } else {
    return array
  }
}

module.exports = [mergeSort, firstSplit, secondSplit, merge]
