module.exports = function(eleventy) {

	// BrowserSync
	eleventy.setBrowserSyncConfig(require('./config/browser-sync.config.js'));

	// Plugins
	eleventy.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

	// Add some utility filters
	eleventy.addFilter('pretty', require('./src/utils/filters/pretty-url.js'));
	eleventy.addFilter('dateLocal', require('./src/utils/filters/date-local.js'));
	eleventy.addFilter('dateLocalFriendly', require('./src/utils/filters/date-friendly.js'));

	// Transforms
	eleventy.addTransform('minify-html', require('./src/utils/minify-html.js'));

	// Passthrough
	eleventy.addPassthroughCopy('./src/assets/ico');
	eleventy.addPassthroughCopy('./src/assets/images');

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
