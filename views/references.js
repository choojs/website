var wrapper = require('../components/wrapper')
var format = require('../components/format')
var html = require('choo/html')

module.exports = wrapper(view)

function view (state, emit) {
  return html`
    <div>
      reference
    </div>
  `
}