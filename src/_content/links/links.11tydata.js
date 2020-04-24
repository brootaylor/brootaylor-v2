module.exports = {
  layout: "layouts/links.njk",
  bodyClass: "links",
  tags: [
    "links"
  ],
  permalink: "/links/{{ date | dateOnly }}/{{ page.fileSlug }}.html",
  changefreq: "monthly",
  priority: "0.9",
  hidden: "false"
}
