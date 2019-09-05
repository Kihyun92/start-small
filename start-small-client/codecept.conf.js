exports.config = {
  tests: './e2e/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:4200',
      show: false
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'start-small-client'
}