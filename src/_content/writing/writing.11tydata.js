module.exports = {
  layout: "layouts/writing.njk",
  bodyClass: "writing",
  tags: [
    "writing"
  ],
  permalink: "/writing/{{ date | dateOnly }}/{{ page.fileSlug }}.html",
  changefreq: "monthly",
  priority: "0.9",
  hidden: "false"
}
