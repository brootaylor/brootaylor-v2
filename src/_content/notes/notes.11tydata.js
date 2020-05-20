module.exports = {
  layout: "layouts/notes.njk",
  eleventyComputed: {
    title: "Note: {{ date | dateTimeReadable('dd LLLL yyyy @ t') }}",
  },
  bodyClass: "notes",
  tags: [
    "post",
    "notes"
  ],
  permalink: "/notes/{{ date | dateOnly }}/note_{{ page.fileSlug }}.html",
  changefreq: "monthly",
  priority: "0.9",
  hidden: "false"
}
