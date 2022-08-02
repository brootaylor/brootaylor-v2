---
title: "My Custom CSS Reset"
# Populates the `meta description` for a page
summary: "Custom CSS reset from Josh Comeau."
bookmarkExternal: "https://www.joshwcomeau.com/css/custom-css-reset/"
bookmarkLabel: "www.joshwcomeau.com"
bookmarkAuthor: "Josh Comeau"

date: 2021-12-03T16:34:00
updated: 2021-12-21T19:02:00

location:
  locality: "Crawley"
  country-name: "United Kingdom"
category:
- "web"
- "frontend"
- "css"
- "reset"

eleventyExcludeFromCollections: false
---

This is a nifty little CSS reset and I love the thought process Josh has gone through to come up with it.

In particular some really interesting [`line-height` calculating](https://www.joshwcomeau.com/css/custom-css-reset/#digit-tweaking-line-height)!

```css
* {
  line-height: calc(1em + 0.5rem);
}
```

Looks like he's still experimenting with it but I'll certainly be keeping an eye out for it.
