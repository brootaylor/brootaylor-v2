const fs = require('fs')

module.exports = {
  notify: true,
  watch: true,
  browser: 'firefox',
  open: 'local',
  startPath: '/',
  logPrefix: "Bruce Taylor's website",
  logLevel: 'debug',
  callbacks: {
    ready (err, browserSync) {
      const content404 = fs.readFileSync('dist/error/404.html')

      browserSync.addMiddleware('*', (req, res) => {
        // Provides the 404 content without redirect.
        res.write(content404)
        res.end()
      })
    }
  },
  ui: {
    port: 8080
  },
  ghostMode: false
}
