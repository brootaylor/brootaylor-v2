const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssPresetEnv({
      autoprefixer: { grid: false } // Using @support feature queries at the moment to handle this
    })
  ]
}
