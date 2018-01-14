var html = require('choo/html')

module.exports = footer

function footer (text) {
  if (!text) return
  return html`
    <div class="bgc-black fc-pink p0-5">
      <div class="p0-5">
        ${text.map(function (line) {
          return html`<div>${line}</div>`
        })}
      </div>
    </div>
  `
}