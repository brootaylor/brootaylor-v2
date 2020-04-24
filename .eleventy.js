const browserSync = require('./config/browser-sync.config.js');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginNavigation = require('@11ty/eleventy-navigation');
const prettyUrl = require('./lib/utils/filters/pretty-url.js');
const dateOnly = require('./lib/utils/filters/dateOnly.js');
const dateTime = require('./lib/utils/filters/dateTime.js');
const dateTimeReadable = require('./lib/utils/filters/dateTimeReadable.js');
const htmlMinify = require('./lib/utils/transforms/minify-html.js');

module.exports = function(eleventy) {

  // BrowserSync
  eleventy.setBrowserSyncConfig(browserSync);

  // Collections
  // ...could go here.

  // Plugins
  eleventy.addPlugin(pluginSyntaxHighlight);
  eleventy.addPlugin(pluginNavigation);

  // Add some utility filters
  eleventy.addFilter('pretty', prettyUrl);
  eleventy.addFilter('dateOnly', dateOnly); // Generates numerial date (eg. 2020-02-22)
  eleventy.addFilter('dateTime', dateTime); // Generates numerical date and time (eg. 2020-02-22T09:50:00.000Z)
  eleventy.addFilter('dateTimeReadable', dateTimeReadable); // Generates readable date and time (eg. 22 February 2020, 9:50 am)

  // Transforms
  eleventy.addTransform('minify-html', htmlMinify);

  // Passthrough
  eleventy.addPassthroughCopy('./src/assets/fonts');
  eleventy.addPassthroughCopy('./src/assets/ico');
  eleventy.addPassthroughCopy('./src/assets/images');
  eleventy.addPassthroughCopy('./src/assets/video');

  // Enable data deep merge
  eleventy.setDataDeepMerge(true);

  // Config
  return {
    templateFormats: [
      'md',
      'njk',
      'liquid',
      'html'
    ],

    pathPrefix: '',

    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,

    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'www',
    }
  };
}
