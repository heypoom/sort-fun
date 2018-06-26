const viz = require('./visualizer')

function swap(list, i, j) {
  const temp = list[i]
  viz(list, i, j)

  list[i] = list[j]
  list[j] = temp
}

module.exports = swap
