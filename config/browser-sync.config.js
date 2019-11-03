const fs = require("fs");

module.exports = {
    files: 'www',
    notify: true,
    watch: true,
    browser: ["firefox"],
    open: "local",
    callbacks: {
        ready: function(err, browserSync) {
          const content_404 = fs.readFileSync('www/404.html');

          browserSync.addMiddleware("*", (req, res) => {
            // Provides the 404 content without redirect.
            res.write(content_404);
            res.end();
          });
        }
    }
};
