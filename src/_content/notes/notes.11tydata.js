module.exports = {
  layout: "layouts/notes.njk",
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
