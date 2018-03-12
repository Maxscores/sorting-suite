const bubbleSort = require('./lib/bubble-sort');
const insertionSort = require('./lib/insertion-sort');
const [mergeSort, firstSplit, secondSplit, merge] = require('./lib/merge-sort')
const quickSort = require('./lib/quick-sort')

const shuffle = (array) => {
  var j, x, i;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = array[i]
    array[i] = array[j]
    array[j] = x
  }
  return array
}

const buildArray = (length) => {
  let array = []
  for (var i = 0; i < length; i++) {
    array.push(i)
  }
  return array
}

const average = (array) => {
  let sum = array.reduce((total, value) => {
    total += value
    return total
  }, 0)
  return sum / array.length
}

const benchmarkSort = (times, method, valueCount) => {
  let totalTimes = []
  let values = buildArray(valueCount)
  for (var i = 0; i < times; i++) {
    let shuffled = shuffle(values)
    let startTime = Date.now()
    method(shuffled)
    let endTime = Date.now()
    totalTimes.push(endTime - startTime)
  }
  let averageTime = average(totalTimes)
  return `Averaged ${averageTime} seconds`
}

console.log("Sort 1,000 values")
console.log("Bubble Sort    " + benchmarkSort(1000, bubbleSort, 1000))
console.log("Insertion Sort " + benchmarkSort(1000, insertionSort, 1000))
console.log("Merge Sort     " + benchmarkSort(1000, mergeSort, 1000))
console.log("Quick Sort     " + benchmarkSort(1000, quickSort, 1000))
console.log("-------------------------------------")
console.log("Sort 10,000 values")
console.log("Bubble Sort    " + benchmarkSort(1000, bubbleSort, 10000))
console.log("Insertion Sort " + benchmarkSort(1000, insertionSort, 10000))
console.log("Merge Sort     " + benchmarkSort(1000, mergeSort, 10000))
console.log("Quick Sort     " + benchmarkSort(1000, quickSort, 10000))
console.log("-------------------------------------")
console.log("Sort 100,000 values")
console.log("Bubble Sort     too slow!")
console.log("Insertion Sort " + benchmarkSort(1000, insertionSort, 100000))
console.log("Merge Sort     " + benchmarkSort(1000, mergeSort, 100000))
console.log("Quick Sort     " + benchmarkSort(1000, quickSort, 100000))
console.log("-------------------------------------")
console.log("Sort 1,000,000 values")
console.log("Bubble Sort     too slow!")
console.log("Insertion Sort " + benchmarkSort(1000, insertionSort, 1000000))
console.log("Merge Sort     " + benchmarkSort(1000, mergeSort, 1000000))
console.log("Quick Sort     " + benchmarkSort(1000, quickSort, 1000000))
console.log("-------------------------------------")
console.log("Sort 10,000,000 values")
console.log("Bubble Sort     too slow!")
console.log("Insertion Sort " + benchmarkSort(1000, insertionSort, 10000000))
console.log("Merge Sort     " + benchmarkSort(1000, mergeSort, 10000000))
console.log("Quick Sort     " + benchmarkSort(1000, quickSort, 10000000))
