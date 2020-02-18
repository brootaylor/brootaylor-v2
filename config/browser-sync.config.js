const fs = require('fs');

module.exports = {
  notify: true,
  watch: true,
  browser: ['google chrome'],
  open: 'local',
  startPath: '/en/',
  logPrefix: 'Bruce Taylor\'s website',
  callbacks: {
    ready(err, browserSync) {
      const content404 = fs.readFileSync('www/en/404.html');

      browserSync.addMiddleware('*', (req, res) => {
        // Provides the 404 content without redirect.
        res.write(content404);
        res.end();
      });
    },
  },
};
