const chalk = require('chalk')

function visualize(list, head, tail) {
  const hue = 360 / list.length

  const numbers = list.map((num, index) => {
    const ap = chalk.hsl(num * hue, 100, 80)

    if (!head && !tail) {
      return ap(num)
    }

    if (index === head || index === tail) {
      return ap.bold(num)
    }

    return chalk.grey(num)
  })

  return numbers.join(' ')
}

const log = (...params) => console.log(visualize(...params))

module.exports = log
module.exports.visualize = visualize
