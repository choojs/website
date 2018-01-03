var format = require('../components/format')
var html = require('choo/html')

module.exports = view

function view (state, emit) {
  return html`
    <div>
      <div class="psf t0 r0 py0-5 px1">
        <a href="/" class="tdn fc-pink">← Home</a>
      </div>
      <div class="fc-pink bgc-black p1 oh">
        ${format(state.content.demo)}
      </div>
    </div>
  `
}
