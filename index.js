const chalk = require('chalk')

const run = require('./runner')
const viz = require('./visualizer')
const swap = require('./swap')

const bubble = require('./bubble')
const selection = require('./selection')
const insertion = require('./insertion')

// ------------ TESTS -------------

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
    run: bubble,
    ...reversed,
  },
  insertion_random: {
    run: insertion,
    ...randomized,
  },
  bubble_reversed: {
    run: bubble,
    ...reversed,
  },
  selection_reversed: {
    run: selection,
    ...reversed,
  },
  selection_random: {
    run: selection,
    ...randomized,
  },
  bubble_sorted: {
    run: bubble,
    ...sorted,
  },
})
