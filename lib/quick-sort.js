const flatten = (array) => {
  return array.concat.apply([], array)
}

const quickSort = (array) => {
  let pivot = array[array.length - 1]
  let sorted = [pivot]
  if (array.length > 1) {
    let larger = []
    let smaller = []
    for (var i = 0; i < array.length - 1; i++) {
      let number = array[i]
      if (number > pivot) {
        larger.push(number)
      } else {
        smaller.push(number)
      }
    }
    sorted.push(quickSort(larger))
    sorted.unshift(quickSort(smaller))
    return flatten(sorted)
  } else {
    return array
  }
}


module.exports = quickSort
