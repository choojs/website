var objectValues = require('object-values')
var wrapper = require('../components/wrapper')
var format = require('../components/format')
var html = require('choo/html')

module.exports = wrapper(view)

function view (state, emit) {
  var pages = objectValues(state.page.pages).map(function (child) {
    return state.content[child.url]
  })

  return html`
    <div class="w100 wmx1100 mxa">
      <div class="p0-5">
        <div class="p0-5 fs4 lh1">
          <span class="fc-pinker">Choo / </span>
          ${state.page.title}
        </div>
        <div>
          ${pages.map(renderPage)}
        </div>
      </div>
    </div>
  `

  function renderPage (props) {
    return html`
      <div class="p0-5 fs2">
        <a href="${props.url}">${props.title}</a>
      </div>
    `
  }
}