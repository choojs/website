var mount = require('choo/mount')
var html = require('choo/html')
var log = require('choo-log')
var css = require('sheetify')
var choo = require('choo')
var path = require('path')
var fs = require('fs')

;css('tachyons')
var bodyStyles = css`:host { background-color: pink }`

var app = choo()
app.use(log())
app.router([ '/', mainView ])
mount('body', app.start())

function mainView () {
  return html`
    <body class=${bodyStyles}>
      ${Main()}
      ${Example()}
    </body>
  `
}

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
        <div class="fl-ns dib w-100 w-20-l pr3-m pr4-l">
          <a class="black link" href="/">
            Navigate Home
          </a>
        </div>
        <div class="fl-ns w-100 w-20-l pr3-m pr4-l">
          <a class="black link" href="https://github.com/yoshuawuyts/choo-handbook">
            View the handbook
          </a>
        </div>
        <div class="fl-ns w-100 w-20-l pr3-m pr4-l">
          <a class="black link" href="https://github.com/trainyard/choo-cli">
            Install the CLI
          </a>
        </div>
        <div class="fl-ns w-100 w-20-l pr3-m pr4-l">
          <a class="black link" href="https://github.com/yoshuawuyts/choo">
            Visit GitHub
          </a>
        </div>
      </div>
    </main>
  `
}

function Example () {
  var file = fs.readFileSync(path.join(__dirname, 'assets/example.js'), 'utf8')
  return html`
    <section class="cf ph3 ph4-m ph7-l mw9 center">
      <pre class="db bg-white pa3 pa4-l mh4-l mv0 overflow-auto"><code>${file}</code></pre>
    </section>
  `
}
