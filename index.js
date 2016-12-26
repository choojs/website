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
;css('./assets/code.css')
var bodyStyles = css`:host { background-color: #ffc0cb }`

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
          <span class="vhs-flicker vhs-delay-4">
            sturdy frontend framework
          </span>
        </h1>
      </div>
      <div class="f5 lh-copy fl w-100 mb4 vhs-flicker vhs-delay-5">
        ${tiny('tiny API')}
        ${tiny('performs well')}
        ${tiny('5kb in size')}
        ${tiny('v impressive')}
      </div>
    </main>
  `

  function tiny (text) {
    return html`
      <div class="fl-ns w-100 w-20-l pr3-m pr4-l">
        ${text}
      </div>
    `
  }
}

function Example () {
  var code = html`
    <pre class="lh-copy measure-wide-l mt0-ns db bg-dark-gray pa3 pa4-l mv0 overflow-auto"><code>${
      toHtml(highlight(fs.readFileSync(path.join(__dirname, 'assets/example.js'), 'utf8'), { lang: 'js' }))
    }</code></pre>
  `
  return html`
    <article class="cf ph4 ph5-l pv5 vhs-flicker vhs-delay-5">
      <header class="fn fl-l w-40-l pr4-l">
        <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
          Input field example
        </h1>
        <h2 class="f3 black-70 lh-title">
          The goal of this example is to show how to combine logic and views.
          It's all just JavaScript and HTML.
        </h2>
        <div class="f6 ttu tracked dark-gray" href="#">
          Run online (soon) ❯
        </div>
      </header>
      <div class="fn fl-l w-60-l mt5 mt0-l">
        ${code}
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
    <section class="cf pt4 pt5-l ph3 ph4-m ph7-l mw9 center vhs-flicker vhs-delay-5">
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
            ${el('Minimal in every aspect', `
              Choo's modular core was engineered from the ground up to be
              smaller and more efficient than every other alternative out
              there. This was made possible by building out the core components
              over the span of 3 years and combining them under a tiny API.
            `)}
            ${el('No framework lock in', `
              Choo operates on raw DOM nodes using an advanced diffing
              algorithm. Not only is this fast, it also means that all elements
              you build can be rendered directly on the DOM. Elements built
              for choo will work as long as the DOM continues to exist.
            `)}
            ${el('Easy to pick up', `
              We think learning frameworks is boring. So instead of inventing a
              new language, Choo relies on vanilla JS and HTML. Combined with
              its small API and clean architecture this means Choo is easy to
              get started with, and stays that way as projects grow in scope
              and humans.
            `)}
          </div>
        </section>
      </div>
    </section>
  `
  function el (title, text) {
    return html`
      <article class="pv2 fl w-100 w-third-l pr4-l">
        <h2 class="f5 f4-ns fw6 mb0">
          ${title}
        </h2>
        <p class="f6 f5-ns measure lh-copy mt0">
          ${text}
        </p>
      </article>
    `
  }
}

function Footer () {
  return html`
    <footer class="bg-white ph4 ph5-l pb4 pt4 pt5-l">
      <div class="f5 lh-copy fl w-100">
        ${link('View the handbook', 'https://github.com/yoshuawuyts/choo-handbook')}
        ${link('Install the CLI', 'https://github.com/trainyard/choo-cli')}
        ${link('Choo on GitHub', 'https://github.com/yoshuawuyts/choo')}
        ${link("Here's a twitter", 'https://twitter.com/yoshuawuyts')}
        ${link('View source', 'https://github.com/yoshuawuyts/choo-website')}
      </div>
      <p class="b pt6 pt5-l">
        Made with 🚂 in Saigon, Tokyo, Berlin
      </p>
    </footer>
  `

  function link (text, url) {
    return html`
      <div class="fl-ns w-100 w-20-l pr3-m pr4-l b">
        <a class="black link dim" href=${url}>
          ${text}
        </a>
      </div>
    `
  }
}
