const swap = require('./swap')

function selectionSort(list) {
  const len = list.length
  let minIndex
  let temp

  for (let i = 0; i < len; i++) {
    minIndex = i

    for (let j = i + 1; j < len; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j
      }
    }

    swap(list, i, minIndex)
  }

  return list
}

module.exports = selectionSort
