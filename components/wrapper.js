var html = require('choo/html')
var footer = require('./footer')

var title = 'Choo'

module.exports = wrapper

function wrapper (view) {
  return function (state, emit) {
    if (state.title !== title) emit(state.events.DOMTITLECHANGE, title)
    return html`
      <body class="x xjb xdc vhmn100 ff-sans lh1-5 fs1 bgc-pink fc-black">
        ${view(state, emit)}
        ${footer(state.content['/'].footer)}
      </body>
    `
  }
}
