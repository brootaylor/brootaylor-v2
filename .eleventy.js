module.exports = function(eleventy) {

  // BrowserSync
  eleventy.setBrowserSyncConfig(require('./config/browser-sync.config.js'));

  // Plugins
  eleventy.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // Add some utility filters
  eleventy.addFilter('pretty', require('./src/utils/filters/pretty-url.js'));
  eleventy.addFilter('dateLocal', require('./src/utils/filters/date-local.js')); // Generates numerial date (eg. 2020-02-22)
  eleventy.addFilter('dateTimeLocal', require('./src/utils/filters/datetime-local.js')); // Generates numerical date and time (eg. 2020-02-22T09:50:00.000Z)
  eleventy.addFilter('dateTimeLocalFriendly', require('./src/utils/filters/datetime-local-friendly.js')); // Generates readable date and time (eg. 22 February 2020, 9:50 am)

  // Transforms
  eleventy.addTransform('minify-html', require('./src/utils/minify-html.js'));

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
      'html'
    ],

    pathPrefix: '',

    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,

    dir: {
      input: 'src',
      includes: '_templates',
      data: '_data',
      output: 'www',
    }
  };
}
