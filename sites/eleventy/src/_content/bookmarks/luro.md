---
title: Luro
summary: Luro.
bookmarkExternal: https://luroapp.com/
bookmarkLabel: luroapp.com
bookmarkAuthor: Paravel
date: 2023-09-18T12:20:27.631Z
updated: ""
location:
  locality: Crawley
  country_name: UK
category:
  - tech
  - web
  - design-sytem
  - product
  - frontend
  - components
eleventyExcludeFromCollections: true
---

It can be such a minefield talking about <abbr title="Multi-page apps.">MPAs</abbr> versus <abbr title="Single-page apps.">SPAs</abbr>.

Personally, I've found it far too easy to end up in the weeds concerning this subject &mdash; inevitably banging ones own subjective drum.

In Jeremy's post &mdash; *(response to a question)* &mdash; about [why he seems to advocate the use of multi-page web apps and not single-page ones](https://adactio.com/journal/20442), I think he articulates his views really well on this prickly subject... *without teeth*.

**Starting with**...

> For most use cases, a website (or multi-page app if you prefer) is going to provide the most robust experience for the most number of users. That’s because a user’s web browser takes care of most of the heavy lifting.

**Why single-page app architecture may be more suitable**...

> There are some cases where you’d want a state to persist across pages. Let’s say you’re playing a song, or a podcast episode. Ideally you’d want that player to continue seamlessly playing even as the user navigates around the site. In that situation, a single-page app would be a suitable architecture.

**Don't think it's for free though**...

> But that architecture comes at a cost. Now you’ve got stop the browser doing what it would normally do with links and forms. It’s up to you to recreate that functionality. And you can’t do it with HTML, a robust fault-tolerant declarative language. You need to reimplement all that functionality in JavaScript, a less tolerant, more brittle language.
>
> Then you’ve got to ship all that code to the user before they can use your site. It might be JavaScript code you’ve written yourself or it might be a third-party library designed for building single-page apps. Either way, the user pays a download tax (and a parsing tax, and an execution tax). Whereas with links and forms, all of that functionality is pre-bundled into the user’s web browser.

**In closing**...

> When it comes to front-end development, I’m worried that we’ve reached a state where the more complex over-engineered approach is viewed as the default.
>
> I may be committing a fundamental attribution error here, but I think that we’ve reached this point not because of any consideration for users, but rather because of how it makes us developers feel. Perhaps building an old-fashioned website that uses HTML for navigations feels too easy, like it’s beneath us. But building an “app” that requires JavaScript just to render text on a screen feels like real programming.
>
> I hope I’m wrong. I hope that other developers will start to consider user experience first and foremost when making architectural decisions.
