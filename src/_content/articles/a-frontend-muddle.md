---
title: A front-end muddle
summary: If you find yourself getting in a muddle about what front-end development entails anymore.
date: 2020-02-14T01:54:19.300-00:00
---

Posted as an example, on <time datetime="{{ date | dateLocal }}">{{ date | dateLocalFriendly("t, LLL d, y")}}</time>

The common front-matter data for all of the files in the posts section are abstracted into a `posts.json` file so that we don't need to repeat that on every file. Handy.

It looks like this:

```js
{
  "layout" : "layouts/post.md",
  "tags" : "post"
}
```
