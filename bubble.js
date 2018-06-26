const swap = require('./swap')

function bubbleSort(list) {
  const len = list.length

  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (list[j - 1] > list[j]) {
        swap(list, j, j - 1)
      }
    }
  }

  return list
}

module.exports = bubbleSort
