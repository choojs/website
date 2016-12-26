var mount = require('choo/mount')
var html = require('choo/html')
var log = require('choo-log')
var css = require('sheetify')
var choo = require('choo')

css('tachyons')

var prefix = css`
  :host {
    background-color: pink;
  }
`

var app = choo()
app.use(log())
app.router([ '/', mainView ])
mount('body', app.start())

function mainView () {
  return html`
    <body class=${prefix}>
      ${Main()}
      ${Footer()}
    </body>
  `
}

// function Navigation () {
//   return html`
//     <nav class="pa3 pa4-ns">
//       <a class="link dim black f4 f3-ns dib mr3" href="#" title="Home">Home</a>
//       <a class="link dim black f4 f3-ns dib mr3" href="#" title="Handbook">Handbook</a>
//       <a class="link dim black f4 f3-ns dib mr3" href="#" title="CLI">CLI</a>
//     </nav>
//   `
// }

function Main () {
  return html`
    <main class="cf pa3 pa4-m pa5-l mw9 center">
      <div class="fr w-100 w-80-l">
        <h1 class="f2 f1-l lh-title mt0 mb4 mb5-ns">
          Choo
          <br class="dn db-ns">
          sturdy frontend framework
        </h1>
      </div>
      <div class="f5 lh-copy fl w-100 mb4">
        <div class="fl-ns w-100 w-20-l pr3-m pr5-l">
          Navigate Home
        </div>
        <div class="fl-ns w-100 w-20-l pr3-m pr5-l">
          View the handbook
        </div>
        <div class="fl-ns w-100 w-20-l pr3-m pr5-l">
          Install the CLI
        </div>
        <div class="fl-ns w-100 w-20-l pr3-m pr5-l">
          Visit GitHub
        </div>
      </div>
    </main>
  `
}

function Footer () {
}
