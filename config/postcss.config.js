module.exports = {
  plugins: {
    'postcss-preset-env': {
      autoprefixer: {
        grid: false // Using @support feature queries at the moment to handle this
      },
      stage: 4,
      features: {
        'custom-properties': true // Ensuring support for browsers not supporting custom properties
      }
    }
  }
}
