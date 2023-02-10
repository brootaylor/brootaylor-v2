// Environment config
require('dotenv').config()

// Local server (Eleventy Dev Server)
const eleventyServer = require('./config/eleventy-server.config.js')

// Import (plugins)
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginNavigation = require('@11ty/eleventy-navigation')

// Import (libraries)
const markdown = require('./lib/libraries/markdown.js')
const markdownItAnchor = require('markdown-it-anchor');

// Import (filters)
const prettyUrl = require('./lib/utils/filters/pretty-url.js')
const dateOnly = require('./lib/utils/filters/dateOnly.js')
const dateTime = require('./lib/utils/filters/dateTime.js')
const dateTimeReadable = require('./lib/utils/filters/dateTimeReadable.js')

// Import (transforms)
const htmlMinify = require('./lib/utils/transforms/minify-html.js')

// Import (shortcodes)
const photoGallery = require('./lib/shortcodes/photoGallery.js')

// Import (collections)
const postWriting = require('./lib/collections/postWriting.js')
const postNotes = require('./lib/collections/postNotes.js')
const postBookmarks = require('./lib/collections/postBookmarks.js')
const postPhotos = require('./lib/collections/postPhotos.js')

module.exports = function (eleventy) {
  // Eleventy Dev Server
  eleventy.setServerOptions(eleventyServer)

  // Plugins
  eleventy.addPlugin(pluginSyntaxHighlight)
  eleventy.addPlugin(pluginRss)
  eleventy.addPlugin(pluginNavigation)

  // Libraries
  eleventy.setLibrary('md', markdown)

  // Customise Markdown library settings:
	eleventy.amendLibrary('md', mdLib => {
		mdLib.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.ariaHidden({
				placement: 'after',
				class: 'header-anchor',
				symbol: '#',
				ariaHidden: true,
			}),
			level: [2,3,4],
			slugify: eleventy.getFilter('slugify')
		});
	});

  // Add some utility filters
  eleventy.addFilter('pretty', prettyUrl)
  eleventy.addFilter('dateOnly', dateOnly) // Generates numerial date (eg. 2020-02-22)
  eleventy.addFilter('dateTime', dateTime) // Generates numerical date and time (eg. 2020-02-22T09:50:00.000Z)
  eleventy.addFilter('dateTimeReadable', dateTimeReadable) // Generates readable date and time (eg. 22 February 2020, 9:50 am)

  // Transforms
  eleventy.addTransform('minify-html', htmlMinify)

  // Shortcodes
  eleventy.addShortcode('year', () => `${new Date().getFullYear()}`)
  eleventy.addNunjucksAsyncShortcode('photo', photoGallery);

  // Collections
  eleventy.addCollection('postWriting', postWriting)
  eleventy.addCollection('postNotes', postNotes)
  eleventy.addCollection('postBookmarks', postBookmarks)
  eleventy.addCollection('postPhotos', postPhotos)

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
