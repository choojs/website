#!/usr/bin/env node

// var MinifyHtml = require('minify-html-stream').Minifier
// var hyperstream = require('hyperstream')
// var fromString = require('from2-string')
// var createHtml = require('create-html')
var purify = require('purify-css')
var path = require('path')
var fs = require('fs')

// var index = require('../index.js')
// var client = index.toString('/')
// var client$ = fromString(client)

// var html = createHtml({
//   title: '🚂🚃🚃🚃',
//   script: 'bundle.js',
//   css: 'bundle.css'
// })
// var html$ = fromString(html)

// var hs = hyperstream({
//   'body': client$
// })

// html$.pipe(hs)
//   .pipe(new MinifyHtml())
//   .pipe(fs.createWriteStream(path.join(__dirname, '../dist/index.html')))
//   .on('finish', compileCss)

var css = fs.readFileSync(path.join(__dirname, '../dist/bundle.css'), 'utf8')
var js = fs.readFileSync(path.join(__dirname, '../dist/bundle.js'), 'utf8')
var newCss = purify(js, css, { minify: true, rejected: true })
fs.writeFileSync(path.join(__dirname, '../dist/bundle.css'), newCss)
