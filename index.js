var jsSyntax = require('highlight-syntax/js')
var Highlight = require('highlight-syntax')
var mount = require('choo/mount')
var html = require('choo/html')
var log = require('choo-log')
var css = require('sheetify')
var choo = require('choo')
var path = require('path')
var fs = require('fs')

var highlight = Highlight([ jsSyntax ])

;css('tachyons')
;css('vhs/css/vhs.min.css')
;css('highlight-syntax/light.css')
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
      ${Principles()}
      ${Footer()}
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
          tiny API
        </div>
        <div class="fl-ns w-100 w-20-l pr3-m pr4-l">
          performs well
        </div>
        <div class="fl-ns w-100 w-20-l pr3-m pr4-l">
          5kb in size
        </div>
        <div class="fl-ns w-100 w-20-l pr3-m pr4-l">
          v impressive
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
          toHtml(highlight(fs.readFileSync(path.join(__dirname, 'assets/example.js'), 'utf8'), { lang: 'js' }))
        }</code></pre>
      </div>
    </article>
  `

  function toHtml (str) {
    var el = html`<div></div>`
    el.innerHTML = str
    return el.children[0]
  }
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

function Principles () {
  return html`
    <section class="tl pa4 pa5-l bg-lightest-blue navy">
      <div class="mw9 center">
        <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
          Principles
        </h1>
        <section class="lh-copy">
          <div class="cf">
            <article class="fl pv2 w-100 w-third-l pr4-l">
              <h2 class="f5 f4-ns fw6 mb0">Responsive</h2>
              <p class="f6 f5-ns measure lh-copy mt0">
                Everything should be 100% responsive. Your website should work regardless of a users
                device or screensize.
              </p>
            </article>
            <article class="pv2 fl w-100 w-third-l ph3-l">
              <h2 class="f5 f4-ns fw6 mb0">Readable</h2>
              <p class="f6 f5-ns measure lh-copy mt0">
                No matter the lighting, or the device, font-sizes should be
                large enough and contrast should be high enough for your
                users to easily read your content.
              </p>
            </article>
            <article class="pv2 fl w-100 w-third-l pl4-l">
              <h2 class="f5 f4-ns  fw6 mb0">
                Modular
              </h2>
              <p class="f6 f5-ns measure lh-copy mt0">
                Tachyons isn't just a monolithic framework. It's a collection of small modules
                that can be mixed and matched or used independently. Use what you need. Leave the rest.
              </p>
            </article>
          </div>
          <div class="cf w-100">
            <article class="pv2 fl w-100 w-third-l pl0 pr4-l">
              <h2 class="f5 f4-ns fw6 mb0">Accessible</h2>
              <p class="f6 f5-ns measure lh-copy mt0">
                Accessibility is important to us. Throughout both the css
                and the documentation we provide numerous tools and methods for making it
                easier to maximize the accessibility of your site.
              </p>
            </article>
            <article class="pv2 fl w-100 w-third-l ph3-l">
              <h2 class="f5 f4-ns  fw6 mb0">Performant</h2>
              <p class="f6 f5-ns measure lh-copy mt0">
                Code should be optimized for performance.
              </p>
            </article>
            <article class="pv2 fl w-100 w-third-l pl4-l">
              <h2 class="f5 f4-ns fw6 mb0">
                Reusable
              </h2>
              <p class="f6 f5-ns measure lh-copy mt0">
                Clear documentation helps create a shared understanding of design patterns amongst your team.
                This helps promote reuse and reduces the amount of redundancy in a codebase.
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
  `
}

function Footer () {
  return html`
    <footer class="bg-white ph4 ph5-l pb4 pt4 pt5-l">
      <div class="f5 lh-copy fl w-100">
        <div class="fl-ns dib w-100 w-20-l pr3-m pr4-l b">
          <a class="black link" href="/">
            Navigate Home
          </a>
        </div>
        <div class="fl-ns w-100 w-20-l pr3-m pr4-l b">
          <a class="black link" href="https://github.com/yoshuawuyts/choo-handbook">
            View the handbook
          </a>
        </div>
        <div class="fl-ns w-100 w-20-l pr3-m pr4-l b">
          <a class="black link" href="https://github.com/trainyard/choo-cli">
            Install the CLI
          </a>
        </div>
        <div class="fl-ns w-100 w-20-l pr3-m pr4-l b">
          <a class="black link" href="https://github.com/yoshuawuyts/choo">
            Choo on GitHub
          </a>
        </div>
        <div class="fl-ns w-100 w-20-l pr3-m pr4-l b">
          <a class="black link" href="https://github.com/yoshuawuyts/choo-website">
            View source
          </a>
        </div>
      </div>
      <p class="b pt6 pt5-l">
        Made with ♥️ in Saigon, Tokyo, Berlin
      </p>
    </footer>
  `
}
