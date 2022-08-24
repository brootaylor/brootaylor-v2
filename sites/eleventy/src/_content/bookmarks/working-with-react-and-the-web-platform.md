---
title: "Why I don't miss React: a story about using the platform"
# Populates the `meta description` for a page
summary: "In case you’re worried, this article certainly isn’t a dis on React. It is however a wonderfully considered piece by Jack talking about his transition from React to custom Web Components."
bookmarkExternal: "https://www.jackfranklin.co.uk/blog/working-with-react-and-the-web-platform/"
bookmarkLabel: "www.jackfranklin.co.uk"
bookmarkAuthor: "Jack Franklin"

date: 2022-06-13T12:41:00
updated: 2022-06-13T12:41:00

location:
  locality: "Crawley"
  country_name: "UK"
category:
- "web"
- "frontend"
- "frameworks"
- "web components"
- "native"

eleventyExcludeFromCollections: false
---

In case you’re worried, this article certainly isn’t a dis on React. It is however a wonderfully considered piece by Jack talking about his transition from React to custom Web Components - highlighting things we should always consider before reaching for 3rd party dependencies in our web projects.

It’s another good reminder of how much the native web platform (aka browsers) have come on over the last 10 years.

---

> When I left my React focused role behind I expected to find the transition hard, and miss what React had to offer. I've ended up finding the transition easier than expected and have come to really relish working closer to the platform’s primitives and maintaining more control over the software I write and in this blog post I’d like to share why that is.

> When you use a framework like React, your code is no longer in direct control of when components (or functions) are called. Your components don't directly tell React when to re-render them, but React decides. Your components have ceded control to React.

---

It’s not all rosy though - and albeit browsers have come a long way, this post is not to say that you shouldn't reach for dependencies. In response to [Jeremy Keith's post on trust](https://adactio.com/journal/19021) and third party dependencies, [Charles Harries suggests that cross browser compatibility was historically the driver for dependencies](https://charlesharri.es/stream/libraries-over-browser-features).

I like how Jack finishes his article&hellip;

> My hope is that with the baseline feature set supported by browsers now more uniform - especially with the death of Internet Explorer - that we as an industry can over time move to reaching for the extensive built-in functionality of browsers by default, polyfilling where absolutely necessary, and look beyond frameworks as a default starting point.
