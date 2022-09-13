const markdownIt = require('markdown-it')

module.exports = (() => {
  const options = {
    html: true,
    breaks: true,
    typographer: true,
  }

  const plugins = [
    require('markdown-it-abbr'),
    [require('markdown-it-anchor'), {
      permalink: false,
      tabIndex: false
    }],
    require('markdown-it-attrs')
  ]

  const parser = markdownIt(options)

  if (plugins) {
    for (const plugin of plugins) {
      if (Array.isArray(plugin)) {
        // Allow array of options to be passed.
        parser.use(...plugin)
      } else {
        parser.use(plugin)
      }
    }
  }

  return parser
})()
