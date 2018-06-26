const viz = require('./visualizer.js')

function insertionSort(list) {
  const len = list.length
  let i, j, el

  for (i = 1; i < len; i++) {
    el = list[i]
    j = i

    while (j > 0 && list[j - 1] > j) {
      viz(list, j, j - 1)
      list[j] = list[j - 1]

      j--
    }

    // viz(list, j, i)
    list[j] = el
  }

  return list
}

module.exports = insertionSort
