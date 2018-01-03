var html = require('choo/html')

module.exports = wrapper

function wrapper (view) {
  return function (state, emit) {
    return html`
      <body class="ff-sans lh1-5 fs1 bgc-pink fc-black">
        ${view(state, emit)}
      </body>
    `
  }
}
