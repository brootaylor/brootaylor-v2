module.exports = {
  layout: "layouts/photos.njk",
  eleventyComputed: {
    title: "Photo: {{ date | dateTimeReadable('dd LLLL yyyy @ t') }}",
  },
  bodyClass: "blog photos",
  tags: [
    "post",
    "photos"
  ],
  permalink: "/photos/{{ date | dateOnly }}/photo_{{ page.fileSlug }}.html",
  changefreq: "monthly",
  priority: "0.9",
  hidden: false
}
