const htmlmin = require('html-minifier');

module.exports = (content, outputPath) => {
  if (outputPath && outputPath.endsWith('.html')) {
    const minified = htmlmin.minify(content, {
      collapseWhitespace: true,
      preserveLineBreaks: true,
      removeComments: false,
      useShortDoctype: true,
    });
    return minified;
  }

  return content;
};
