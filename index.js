var hypha = require('hypha')
var choo = require('choo')
require('./design')

var wrapper = require('./components/wrapper')
var app = choo()

var site = hypha.readSiteSync('./content', {
  parent: 'content',
  file: 'index.md'
})

app.use(require('./plugins/ui'))
app.use(require('./plugins/scroll'))
app.use(require('./plugins/content')(site))

app.route('/example', wrapper(require('./views/example')))

if (!module.parent) app.mount('body')
else module.exports = app
