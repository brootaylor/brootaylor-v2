---
title: "Bookmarks"
# Populates the `meta description` for a page
summary: "Links to articles and various things I've enjoyed and found interesting. Technical and non-technical. Quite a few of them offer perspectives / advice I appreciate."
# Populates the opening / `lead` text on a page
lead:
  - "Links to articles and various things I've enjoyed and found interesting. Technical and non-technical. Quite a few of them offer perspectives / advice I appreciate."
bodyClass: "bookmarks-home"

date: 2020-02-22T22:10:00
updated: 2021-10-26T17:31:00
---

<ul role="list" class="[ bookmarks__list ] [ no-list ] [ flow ]">
{%- for bookmark in collections.postBookmarks -%}
  <li class="[ bookmarks__list-item ]">
    <article class="[ bookmarks__summary ] [ flow ]">
      <h2><a href="{{ bookmark.url }}">{{ bookmark.data.title | safe }}</a></h2>
      <time datetime="{{ bookmark.date | dateTime }}">{{ bookmark.date | dateTimeReadable("d LLLL y, ") }}{{ bookmark.date | dateTimeReadable("t") | lower }}</time>
      <div><span class="[ visually-hidden ]">Original post can be viewed at</span> &rarr; <a href="{{ bookmark.data.bookmarkExternal }}" rel="external">{{ bookmark.data.bookmarkLabel }}</a></div>
    </article>
  </li>
{%- endfor -%}
</ul>
