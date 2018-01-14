var wrapper = require('../components/wrapper')
var Header = require('../components/header')
var format = require('../components/format')
var html = require('choo/html')

var header = new Header()

module.exports = wrapper(view)

function view (state, emit) {
  var page = state.page

  return html`
    <div>
      <div class="vh100 x xdc">
        ${header.render()}
        <div class="py0-5 px1 tac">
          ${page.subtitle} ↓
        </div>
      </div>
      <div class="w100 wmx1100 mxa">
        <div class="px1">
          <div class="c12 bb2-black"></div>
        </div>
        <div class="x xw p0-5">
          <div class="c12 sm-c8 p0-5">
            <div class="markdown-body">
              ${format(page.text)}
            </div>
          </div>
          <div class="x psr p0-5 c12 sm-c4">
            ${demo(state.content.demo)}
          </div>
        </div>
        <div class="px1">
          <div class="c12 bb2-black"></div>
        </div>
        <div class="c12 x p0-5">
          <div class="c6 p0-5">
            <input
              type="text"
              value="npm i choo"
              class="w100 psr fs2 bttn db tac"
              onclick=${selectText}
            />
          </div>
          <div class="c6 p0-5">
            <a
              href="https://github.com/choojs/choo"
              class="w100 psr fs2 bttn db tac"
            >Repository</a>
          </div>
        </div> 
        ${lineHoriz()}
        <div class="x xw">
          ${createFeatures(page.features)}
        </div>
        ${lineHoriz()}
        ${support({
          link: page.supportlink,
          text: page.support
        })}
      </div>
    </div>
  `
}

function createFeatures (features) {
  features = features || [ ] 
  return features.reduce(function (result, active, i, arr) {
    result.push(html`
      <div class="c12 sm-c6 p1 psr">
        ${i % 2 === 0 ? lineVert() : ''}
        <div class="fs2 fc-pinker lh1 mb1">
          ${active.title}
        </div>
        <div class="markdown-body">
          ${format(active.text)}
        </div>
      </div>
    `)

    if (i < arr.length - 1) {
      result.push(lineHorizMobile())
    }

    return result
  }, [ ])
}

function support (props) {
  props = props || { }
  return html`
    <div class="x xw">
      <div class="c12 x xac xw">
        <div class="c12 p1">
          <a
            href="${props.link}"
            target="_blank"
            class="psr fs2 bttn tdn db p0-5 tac"
          >Support the community</a>
        </div>
        <div class="c12 p1 pt0 fs2 lh1-25 markdown-body">
          ${format(props.text)}
        </div>
      </div>
    </div>
  `
}

function lineVert () {
  return html`<div class="c12 psa t0 r0 b0 dn sm-db my1 br2-black"></div>`
}

function lineHorizMobile () {
  return html`
    <div class="px1 c12 db sm-dn">
      <div class="c12 bb2-black"></div>
    </div>
  `
}

function lineHoriz () {
  return html`
    <div class="px1">
      <div class="c12 bb2-black"></div>
    </div>
  `
}

function footnotes () {
  return html`
    <div class="x xw c12 lh1">
      <a href="#" class="psr tdn fc-black c6 sm-c4 p1 tac bb2-black sm-bb0-black br2-black">
        📖 Handbook
      </a>
      <a href="#" class="psr tdn fc-black c6 sm-c4 p1 tac bb2-black sm-bb0-black br2-black">
        🐦 Twitter
      </a>
      <a href="#" class="psr tdn fc-black c12 sm-c4 p1 tac">
        🔎 Source
      </a>
    </div>
  `
}

function demo (content) {
  return html`
    <a
      href="/example"
      class="psr db tdn c12 vhmx50 sm-vmx100 oh bgc-black z2 oh fs1 sm-fs0-5"
      style="cursor: zoom-in;"
    >
      <div class="markup sm-psa t0 l0 r0 p1 sm-p0-5">
        ${format(content)}
      </div>
    </a>
  `
}

function selectText (event) {
  event.target.select()
}