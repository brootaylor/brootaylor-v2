// Environment config
require('dotenv').config()

// Local server
const browserSync = require('./config/browser-sync.config.js')
const path = require("path");

// Import (plugins)
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginNavigation = require('@11ty/eleventy-navigation')
const Image = require("@11ty/eleventy-img")

// async function imageShortcode(src, alt) {
//   if(alt === undefined) {
//     // You bet we throw an error on missing alt (alt="" works okay)
//     throw new Error(`Missing \`alt\` on myImage from: ${src}`);
//   }

//   let metadata = await Image(src, {
//     widths: [320, 600, 768, 1024, 1200],
//     formats: ["webp", "jpg"],
//     filenameFormat: function (id, src, width, format, options) {
//       const extension = path.extname(src);
//       const name = path.basename(src, extension);
//       return `${name}-${width}w.${format}`;
//     },
//     urlPath: "/assets/images/posts/photos/",
//     outputDir: "./dist/assets/images/posts/photos/"
//   });

//   let data = metadata.jpeg[metadata.jpeg.length - 1];
//   return `<img src="${data.url}" width="${data.width}" height="${data.height}" alt="${alt}" loading="lazy" decoding="async">`;
// }

async function imageShortcode(src, alt, sizes = "100vw") {
  if(alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [300, 1200],
    formats: ['webp', 'jpeg'],
    urlPath: "/assets/images/posts/photos/",
    outputDir: "./dist/assets/images/posts/photos/"
  });

  let lowsrc = metadata.jpeg[0];
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

  return `<figure class="flow">
    ${Object.values(metadata).map(imageFormat => {
      return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
    }).join("\n")}
      <img
        src="${lowsrc.url}"
        width="${highsrc.width}"
        height="${highsrc.height}"
        alt="${alt}."
        class="shadow"
        loading="lazy"
        decoding="async">
        <figcaption>${alt}.</figcaption>
    </figure>`;
}

// async function imageShortcode(src, cls, alt, sizes) {
//   let metadata = await Image(src, {
//     // useCache: false,
//     widths: [320, 600, 768, 1024, 1200],
//     formats: ["webp", "jpg"],
//     filenameFormat: function (id, src, width, format, options) {
//       const extension = path.extname(src);
//       const name = path.basename(src, extension);
//       return `${name}-${width}w.${format}`;
//     },
//     urlPath: "/assets/images/posts/photos/",
//     outputDir: "./dist/assets/images/posts/photos/"
//   });

//   let imageAttributes = {
//     class: cls,
//     alt,
//     sizes,
//     loading: "lazy",
//     decoding: "async",
//   };

//   // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
//   return Image.generateHTML(metadata, imageAttributes, {
//     whitespaceMode: "inline"
//   });
// }

// Import (filters)
const prettyUrl = require('./lib/utils/filters/pretty-url.js')
const dateOnly = require('./lib/utils/filters/dateOnly.js')
const dateTime = require('./lib/utils/filters/dateTime.js')
const dateTimeReadable = require('./lib/utils/filters/dateTimeReadable.js')

// Import (transforms)
const htmlMinify = require('./lib/utils/transforms/minify-html.js')

// Import (collections)
const postWriting = require('./lib/collections/postWriting.js')
const postNotes = require('./lib/collections/postNotes.js')
const postBookmarks = require('./lib/collections/postBookmarks.js')
const postPhotos = require('./lib/collections/postPhotos.js')

module.exports = function (eleventy) {
  // BrowserSync
  eleventy.setBrowserSyncConfig(browserSync)

  // Plugins
  eleventy.addPlugin(pluginSyntaxHighlight)
  eleventy.addPlugin(pluginRss)
  eleventy.addPlugin(pluginNavigation)

  // Add some utility filters
  eleventy.addFilter('pretty', prettyUrl)
  eleventy.addFilter('dateOnly', dateOnly) // Generates numerial date (eg. 2020-02-22)
  eleventy.addFilter('dateTime', dateTime) // Generates numerical date and time (eg. 2020-02-22T09:50:00.000Z)
  eleventy.addFilter('dateTimeReadable', dateTimeReadable) // Generates readable date and time (eg. 22 February 2020, 9:50 am)

  // Shortcodes
  eleventy.addShortcode('year', () => `${new Date().getFullYear()}`)
  eleventy.addNunjucksAsyncShortcode("image", imageShortcode);

  // Transforms
  eleventy.addTransform('minify-html', htmlMinify)

  // Collections
  eleventy.addCollection('postWriting', postWriting)
  eleventy.addCollection('postNotes', postNotes)
  eleventy.addCollection('postBookmarks', postBookmarks)
  eleventy.addCollection('postPhotos', postPhotos)

  // Passthrough
  eleventy.addPassthroughCopy('./src/assets/fonts')
  eleventy.addPassthroughCopy('./src/assets/ico')
  eleventy.addPassthroughCopy('./src/assets/icons')
  eleventy.addPassthroughCopy('./src/assets/images')
  eleventy.addPassthroughCopy('./src/assets/video')
  eleventy.addPassthroughCopy('./src/assets/docs')
  eleventy.addPassthroughCopy('./src/admin/config.yml')

  // Enable data deep merge
  eleventy.setDataDeepMerge(true)

  // Config
  return {
    templateFormats: ['md', 'njk', 'liquid', 'html'],

    pathPrefix: '',

    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,

    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'dist'
    }
  }
}
