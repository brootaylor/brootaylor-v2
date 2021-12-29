---
title: "Bookmarks"
# Populates the `meta description` for a page
summary: "Links to articles and various things I've enjoyed and found interesting. Technical and non-technical. Quite a few of them offer perspectives / advice I appreciate."
# Populates the opening / `lead` text on a page
lead:
  - "Links to articles and various things I've enjoyed and found interesting. Technical and non-technical. Quite a few of them offer perspectives / advice I appreciate."
bodyClass: "bookmarks-home"

date: 2020-02-22T22:10:00
updated: 2021-12-29T00:58:00
---

<ul role="list" class="bookmarks__list | no-list | flow">
{%- for bookmark in collections.postBookmarks -%}
  <li class="bookmarks__list-item">
    <article class="bookmarks__summary | flow">
      <h2>
        <a href="{{ bookmark.url }}">
        {{- bookmark.data.title | safe }}
        {#- Checks whether a `bookmarkAuthor` value has been entered. If so, then the `h2` heading is updated... -#}
        {% if bookmark.data.bookmarkAuthor %} &rarr; {{ bookmark.data.bookmarkAuthor | safe }}{% endif -%}
        </a>
      </h2>
      <time datetime="{{ bookmark.date | dateTime }}">{{ bookmark.date | dateTimeReadable("d LLLL y, ") }}{{ bookmark.date | dateTimeReadable("t") | lower }}</time>
      <div><span class="visually-hidden">Original post can be viewed at</span> &rarr; <a href="{{ bookmark.data.bookmarkExternal }}" rel="external" title="Link to the original post.">{{ bookmark.data.bookmarkLabel }}</a></div>
    </article>
  </li>
{%- endfor -%}
</ul>
