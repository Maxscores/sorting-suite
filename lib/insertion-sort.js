


const insertionSort = (array) => {
  var sorted = []
  var og_array_length = array.length
  for (var i = 0; i < og_array_length; i++) {
    let num = array.pop()
    if (sorted.length === 0) {
      sorted.push(num)
    } else {
      let times = sorted.length
      for (var j = 0; j < times; j++) {
        if (sorted[j] < num && j === (times - 1) ) {
          sorted.splice(j + 1, 0, num)
        } else if (sorted[j] > num) {
          sorted.splice(j, 0, num)
          break
        }
      }
    }
  }
  return sorted
}


module.exports = insertionSort
