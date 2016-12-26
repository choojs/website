var html = require('choo/html')
var choo = require('choo')
var app = choo()

app.model({
  state: { title: 'Not quite set yet' },
  reducers: {
    update: function (state, data) {
      return { title: data }
    }
  }
})

function mainView (state, prev, send) {
  return html`
    <main>
      <h1>Title: ${state.title}</h1>
      <input type="text" oninput=${update}>
    </main>
  `

  function update (e) {
    send('update', e.target.value)
  }
}

app.router(['/', mainView])

var tree = app.start()
document.body.appendChild(tree)
