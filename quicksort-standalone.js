const chalk = require('chalk')

// Retrieve the list from environment variables
// We need this as a global for logging purposes.
let list = process.argv.slice(2).map(x => parseInt(x))

// Shuffle the array
const shuffle = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])

// Generate a shuffled int[10] array as default
if (list.length < 1) {
  list = shuffle([...Array(10)].map((_, i) => i + 1))
}

// Hue Multiplier
const HUE = Math.round(360 / list.length)

// Colorize the numbers
const C = num => chalk.hsl(num * HUE, 100, 80)(num)

// Colorize array of numbers
const Cx = arr => arr.map(C).join(' ')

// Log with the current state of the list
const log = (...args) => console.log(Cx(list), ...args)

// Verbose Logging for more detailed explanation for what's going on under the hood
const verbose = (...args) => process.env.VERBOSE && log(chalk.grey(...args))

// Swap
function swap(items, fI, sI) {
  const firstItem = items[fI]

  items[fI] = items[sI]
  items[sI] = firstItem

  verbose(`Swapped ${items[fI]} (index ${fI}) with ${items[sI]} (index ${sI})`)
}

// swap(list, 0, 9)

// Partition the array
function partition(items, left, right) {
  const pivot = items[Math.floor((left + right) / 2)]
  let i = left
  let j = right

  while (i <= j) {
    while (items[i] < pivot) {
      // prettier-ignore
      verbose(`I (${items[i]}) is lower than pivot (${pivot}). Incrementing i...`)

      i++
    }

    while (items[j] > pivot) {
      // prettier-ignore
      verbose(`J (${items[j]}) is higher than pivot (${pivot}). Decrementing j...`)

      j--
    }

    if (i <= j) {
      // prettier-ignore
      // I <= J.
      log(`Swapping ${C(items[i])} (i = ${i}) with ${C(items[j])} (j = ${j})`)

      swap(items, i, j)

      i++
      j--
    }
  }

  return i
}

// Sort the array with QuickSort
function quickSort(items, left, right) {
  let index = 0

  if (items.length > 1) {
    index = partition(items, left, right)

    if (left < index - 1) {
      verbose(`Left is lesser than index. Recursing...`)

      quickSort(items, left, index - 1)
    }

    if (index < right) {
      verbose(`Right is higher than index. Recursing...`)

      quickSort(items, index, right)
    }
  }

  return items
}

log('Starting Sort...')

// Do the QuickSort!
quickSort(list, 0, list.length - 1)

log('Sort Completed.')