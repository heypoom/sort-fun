const assert = require('assert')
const chalk = require('chalk')

function runner({run, out = x => x, ...tests}) {
  Object.entries(tests).forEach(([name, test], i) => {
    const output = [...test.input]

    // prettier-ignore
    console.log(chalk.yellow.bold(`------ CASE ${i + 1}: ${name.toUpperCase()} ------`))

    const exec = test.run || run
    exec(output)

    console.log()

    try {
      assert.deepStrictEqual(output, test.output)

      console.info(chalk.green(`[😎] Test case "${chalk.bold(name)}" passed.`))
      console.log()

      console.log(chalk.blue.bold('Input:'), out(test.input))
      console.log(chalk.green.bold('Output:'), out(output))
    } catch (err) {
      console.error(chalk.red(`[😱] Test case "${chalk.bold(name)}" failed!`))
      console.log()

      console.log(chalk.blue.bold('Input:'), out(test.input))
      console.log(chalk.red.bold('Actual:'), out(err.actual))
      console.log(chalk.green.bold('Expected:'), out(err.expected))
    }

    console.log()
  })
}

module.exports = runner
