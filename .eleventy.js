// Environment config
require('dotenv').config()

// Local server
const browserSync = require('./config/browser-sync.config.js')

// Import (plugins)
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginNavigation = require('@11ty/eleventy-navigation')

// Import (filters)
const prettyUrl = require('./lib/utils/filters/pretty-url.js')
const dateOnly = require('./lib/utils/filters/dateOnly.js')
const dateTime = require('./lib/utils/filters/dateTime.js')
const dateTimeReadable = require('./lib/utils/filters/dateTimeReadable.js')

// Import (transforms)
const htmlMinify = require('./lib/utils/transforms/minify-html.js')

// Import (collections)
const postWriting = require('./lib/collections/postWriting.js')
const postNotes = require('./lib/collections/postNotes.js')
const postBookmarks = require('./lib/collections/postBookmarks.js')

module.exports = function (eleventy) {
  // BrowserSync
  eleventy.setBrowserSyncConfig(browserSync)

  // Plugins
  eleventy.addPlugin(pluginSyntaxHighlight)
  eleventy.addPlugin(pluginRss)
  eleventy.addPlugin(pluginNavigation)

  // Add some utility filters
  eleventy.addFilter('pretty', prettyUrl)
  eleventy.addFilter('dateOnly', dateOnly) // Generates numerial date (eg. 2020-02-22)
  eleventy.addFilter('dateTime', dateTime) // Generates numerical date and time (eg. 2020-02-22T09:50:00.000Z)
  eleventy.addFilter('dateTimeReadable', dateTimeReadable) // Generates readable date and time (eg. 22 February 2020, 9:50 am)

  // Shortcodes
  eleventy.addShortcode('year', () => `${new Date().getFullYear()}`)

  // Transforms
  eleventy.addTransform('minify-html', htmlMinify)

  // Collections
  eleventy.addCollection('postWriting', postWriting)
  eleventy.addCollection('postNotes', postNotes)
  eleventy.addCollection('postBookmarks', postBookmarks)

  // Passthrough
  eleventy.addPassthroughCopy('./src/assets/fonts')
  eleventy.addPassthroughCopy('./src/assets/ico')
  eleventy.addPassthroughCopy('./src/assets/icons')
  eleventy.addPassthroughCopy('./src/assets/images')
  eleventy.addPassthroughCopy('./src/assets/video')
  eleventy.addPassthroughCopy('./src/assets/docs')
  eleventy.addPassthroughCopy('./src/admin/config.yml')

  // Enable data deep merge
  eleventy.setDataDeepMerge(true)

  // Config
  return {
    templateFormats: ['md', 'njk', 'liquid', 'html'],

    pathPrefix: '',

    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,

    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'dist'
    }
  }
}
