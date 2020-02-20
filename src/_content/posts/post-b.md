---
title: Another post page
summary: The common front-matter data for all of the files in the posts section.
date: 2019-11-01
---

## Another post page

Posted as an example, on <time datetime="{{ date | dateLocal }}">{{ date | dateLocalFriendly("LLLL d, y") }}</time>

The common front-matter data for all of the files in the posts section are abstracted into a `posts.json` file so that we don't need to repeat that on every file. Handy.

It looks like this:

```js
{
  "layout" : "layouts/post.md",
  "tags" : "post"
}
```
