const chalk = require('chalk')

const run = require('./runner')
const viz = require('./visualizer')

function swap(list, i, j) {
  const temp = list[i]
  viz(list, i, j)

  list[i] = list[j]
  list[j] = temp
}

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

    viz(list, i, j)
    list[j] = el
  }

  return list
}

// ------------ TESTS -------------

const wrap = fn => list => {
  fn(list)

  return list
}

const bs = wrap(bubbleSort)
const ss = wrap(selectionSort)
const is = wrap(insertionSort)

const gen = len => [...Array(len)].map((_, i) => i + 1)

const reversed = {
  input: gen(6).reverse(),
  output: gen(6),
}

const randomized = {
  input: [1, 5, 2, 4, 3],
  output: gen(5),
}

const sorted = {
  input: gen(5),
  output: gen(5),
}

run({
  out: viz.visualize,
  insertion_reversed: {
    run: is,
    ...reversed,
  },
  insertion_random: {
    run: is,
    ...randomized,
  },
  // bubble_reversed: {
  //   run: bs,
  //   ...reversed,
  // },
  // selection_reversed: {
  //   run: ss,
  //   ...reversed,
  // },
  // selection_random: {
  //   run: ss,
  //   ...randomized,
  // },
  // bubble_sorted: {
  //   run: bs,
  //   ...sorted,
  // },
})
