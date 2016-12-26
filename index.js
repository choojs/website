var mount = require('choo/mount')
var html = require('choo/html')
var log = require('choo-log')
var css = require('sheetify')
var choo = require('choo')
var path = require('path')
var fs = require('fs')

;css('tachyons')
;css('vhs/css/vhs.min.css')
var bodyStyles = css`:host { background-color: pink }`

var app = choo()
app.use(log())
app.router([ '/', mainView ])
mount('body', app.start())

function mainView () {
  return html`
    <body class=${bodyStyles}>
      ${Main()}
      ${Description()}
      ${Example()}
    </body>
  `
}

function Main () {
  return html`
    <main class="cf pt3 pt4-m pt5-l ph3 ph4-m ph5-l mw9 center">
      <div class="fr w-100 w-80-l ttu">
        <h1 class="f2 f1-l lh-title mt0 mb4 mb5-ns vhs-left">
          Choo
          <br class="dn db-ns">
          <span class="vhs-flicker vhs-delay-5">
            sturdy frontend framework
          </span>
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
  return html`
    <article class="cf ph4 ph5-l pv5">
      <header class="fn fl-l w-40-l pr4-l">
        <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
          Input field example
        </h1>
        <h2 class="f3 mid-gray lh-title">
          This is a small input field built using choo. It illustrates how to
          combine logic and views.
        </h2>
      </header>
      <div class="fn fl-l w-60-l">
        <pre class="lh-copy measure-wide-l mt0-ns db bg-white pa3 pa4-l mv0 overflow-auto"><code>${
          fs.readFileSync(path.join(__dirname, 'assets/example.js'), 'utf8')
        }</code></pre>
      </div>
    </article>
  `
}

function Description () {
  return html`
    <section class="cf pt4 pt5-ns ph3 ph4-m ph7-l mw9 center">
      <p class="f4 db mh4-l mv0 pb4 lh-copy">
        ${fs.readFileSync(path.join(__dirname, 'assets/intro.txt'), 'utf8')}
      </p>
    </section>
  `
}
