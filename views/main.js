var html = require('choo/html')
var path = require('path')
var fs = require('fs')

var frames = fs.readFileSync(path.join(__dirname, '../content/animations/choo.txt'), 'utf8')

var Animation = require('../components/animation')
var example = new Animation()
var format = require('../components/format')

module.exports = main

function main (state, emit) {
  return html`
    <div>
      <div class="vhmn100 x xw psr">
        <div class="psr c12 bgc-pinker fc-pink md-c6" style="min-height: 28rem">
          <div class="lh1 psa t0 l0 p1 fs1-5">
            🚂
          </div>
          <div class="fs2 ff-mono lh1 fs3 psa t0 l0 r0 b0 x xjc xac">
            ${example.render({
              frames: frames.split('\n----\n'),
              play: true
            })} 
          </div>
          <div class="psa l0 r0 b0 p1 tac fs1-5 lh1-25">
            a 4kb framework for creating sturdy frontend applications
          </div>
        </div>
        <div class="x xdc xjb c12 md-c6">
          <div class="p1 x xjb fs1-5 lh1">
            <div class="fwhb curp">docs</div>
            <div class="fwhb curp">handbook</div> 
            <div class="fwhb curp">blog</div>
          </div>
          <div class="w100">
            <div class="p1">
              <div class="copy markdown-body">
                <p>We believe programming should be fun and light, not stern and stressful. It's cool to be cute; using serious words without explaining them doesn't make for better results - if anything it scares people off. We don't want to be scary, we want to be nice and fun, and then casually be the best choice around. Real casually. <a href="#">Continue reading →</a></p>
              </div>
            </div>
            <div class="p1 bgc-black fc-pink ff-mono">
              ${npm()}
            </div>
          </div>
        </div>
      </div>
      <div class="bgc-white psr">
        <div class="bb2-grey_25 x xjb py0-75 px0-5 w100">
          <div class="px0-5 fwb">
            Sandbox
          </div>
          <div class="x">
            <div class="px0-5 curd fc-grey_50">Code</div> 
            <div class="px0-5 curp fc-pinker">Preview</div> 
          </div>
        </div>
        <div class="markdown-body p0-5">
          ${format(`
  \`\`\`
  var el = html\`
    <section>
      <div id="first">hello</div>
      <div id="second">world</div>
    </section>
  \`
  \`\`\`
         `)}
        </div>
      </div>
      <div class="x xw p0-5 c12">
        <div class="c4 p0-5 dn sm-x xjc xac">
          img
        </div>
        <div class="c12 sm-c8 p0-5 curp">
          <div class="copy markdown-body">
            <h3>Minimal in every aspect</h3>
            <p>Choo's modular core was engineered from the ground up to be smaller and more efficient than every other alternative out there. This was made possible by building out the core components over the span of 3 years and combining them under a tiny API. </p>
          </div>
        </div>
        <div class="c12 sm-c8 p0-5 curp">
          <div class="copy markdown-body">
            <h3>No framework lock in</h3>
            <p>Choo operates on raw DOM nodes using an advanced diffing algorithm. Not only is this fast, it also means that all elements you build can be rendered directly on the DOM. Elements built for choo will work as long as the DOM continues to exist. </p>
          </div>
        </div>
        <div class="c4 p0-5 dn sm-x xjc xac">
          img
        </div>
        <div class="c4 p0-5 dn sm-x xjc xac">
          img
        </div>
        <div class="c12 sm-c8 p0-5 curp">
          <div class="copy markdown-body">
            <h3>Easy to start with</h3>
            <p>We think learning frameworks is boring. So instead of inventing a new language, Choo relies on vanilla JS and HTML. Combined with its small API and clean architecture this means Choo is easy to get started with, and stays that way as projects grow in scope and humans.</p>
          </div>
        </div>
      </div>
      <div class="p1">
        yo whats good
      </div>
    </div>
  `
}

function npm () {
  var el = html`
    <input
      class="w100"
      value="npm install choo"
      oninput=${handleInput}
      onclick=${handleClick}
    />
  `

  return el

  function handleInput () {
    el.value = 'npm install choo'
  }

  function handleClick () {
    el.focus()
    el.select()
  }
}