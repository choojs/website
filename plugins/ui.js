var xtend = require('xtend')

module.exports = plugin

function plugin (state, emitter, app) {
  state.ui = {
    exampleActive: false
  }

  state.events.UI = 'ui'
  emitter.on(state.events.UI, handleUpdate)
  emitter.on(state.events.DOMCONTENTLOADED, handleLoad)

  function handleLoad () {
    window.addEventListener('resize', handleResize, false)
    handleResize()
  }

  function handleResize (event) {
    var width = window.innerWidth
    var el = document.querySelector('html')

    if (width < 1100 && width > 767) {
      el.style.fontSize = (width / 767) * 100 + '%'
    } else if (width < 767) {
      el.style.fontSize = (width / 500) * 100 + '%'
    } else {
      el.style.fontSize = '150%'
    }
  }

  function handleUpdate (data) {
    if (typeof data === 'object') {
      var render = data.render
      delete data.render
      state.ui = xtend(state.ui, data)
      if (render !== false) emitter.emit(state.events.RENDER)
    }
  }
}