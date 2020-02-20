---
title: A post page
summary: There's not much here in the sample post page. Better get to work.
date: 2019-11-01T12:25:00
---

## A post page

Posted as an example, on <time datetime="{{ date | dateLocal }}">{{ date | dateLocalFriendly("LLLL d, y") }}</time>

There's not much here in the sample post page. Better get to work.

The common front-matter data for all of the files in the posts section are abstracted into a `posts.json` file so that we don't need to repeat that on every file. Handy.

It looks like this:

```js
{
  "layout" : "layouts/post.md",
  "tags" : "post"
}
```
