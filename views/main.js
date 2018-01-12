var wrapper = require('../components/wrapper')
var format = require('../components/format')
var html = require('choo/html')

module.exports = wrapper(main)

function main (state, emit) {
  return html`
    <div class="w100 wmx1100 mxa">
      <div class="p1">
        <div>${state.page.title}</div>
        <div class="markdown-body">${format(state.page.text)}</div>
      </div>
    </div>
  `
}
