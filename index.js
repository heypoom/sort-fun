const chalk = require('chalk')

const run = require('./runner')
const viz = require('./visualizer')
const swap = require('./swap')

const bubble = require('./bubble')
const selection = require('./selection')
const insertion = require('./insertion')

// ------------ TESTS -------------

const gen = len => [...Array(len)].map((_, i) => i + 1)

const shuffle = list =>
  list
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])

const reversed = {
  input: gen(6).reverse(),
  output: gen(6),
}

const randomized = {
  input: shuffle(gen(6)),
  output: gen(6),
}

const sorted = {
  input: gen(5),
  output: gen(5),
}

run({
  out: viz.visualize,
  insertion_reversed: {
    run: insertion,
    ...reversed,
  },
  insertion_random: {
    run: insertion,
    ...randomized,
  },
  selection_reversed: {
    run: selection,
    ...reversed,
  },
  selection_random: {
    run: selection,
    ...randomized,
  },
  bubble_reversed: {
    run: bubble,
    ...reversed,
  },
  bubble_random: {
    run: bubble,
    ...randomized,
  },
})
