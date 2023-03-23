---
title: "Bookmarks"
# Populates the `meta description` for a page
summary: "Links to articles and various things I've enjoyed and found interesting. Technical and non-technical. Quite a few of them offer perspectives / advice I appreciate."
bodyClass: "bookmarks-home"

permalink: "{% if pagination.pageNumber > 0 %}/bookmarks/{{ pagination.pageNumber + 1 }}/index.html{% else %}/bookmarks.html{% endif %}"

pagination:
  data: collections.postBookmarks # This data is called using the `postBookmarks.js` collection script
  size: 15
  alias: bookmarks

date: 2022-04-07T17:23:00
---

{# List of bookmark posts #}
<ul role="list" class="bookmarks__list | no-list | flow">
{% for bookmark in bookmarks -%}
  <li class="bookmarks__list-item">
    <article class="bookmarks__summary | flow">
      <h2>
        <a href="{{ bookmark.url }}">
        {{- bookmark.data.title | safe }}
        {#- Checks whether a `bookmarkAuthor` value has been entered. If so, then the `h2` heading is updated... -#}
        {% if bookmark.data.bookmarkAuthor %}<span class="visually-hidden"> &mdash; written by</span><i aria-hidden="true"> &rarr;</i> {{ bookmark.data.bookmarkAuthor | safe }}{% endif -%}
        </a>
      </h2>
      <time datetime="{{ bookmark.date | dateTime }}">{{ bookmark.date | dateTimeReadable("d LLLL y, ") }}{{ bookmark.date | dateTimeReadable("t") | lower }}</time>
      <div><span class="visually-hidden">Original post can be viewed at</span> <i aria-hidden="true">&rarr;</i> <a href="{{ bookmark.data.bookmarkExternal }}" rel="external" title="Link to the original post.">{{ bookmark.data.bookmarkLabel }}</a></div>
    </article>
  </li>
{% endfor -%}
</ul>

{# Pagination component --> (Maybe export this to its own component at some stage) #}
<nav class="pagination">
  <h3 class="visually-hidden">Pagination for bookmark posts</h3>
  <span class="visually-hidden">Page: {{ pagination.pageNumber + 1 }} of {{ pagination.links | length  }}</span>
  <ul role="list" class="pagination__list | no-list">
    {% if pagination.nextPageHref -%}
      <li class="pagination__list-item">
        <i aria-hidden="true">&larr;</i>
        <a href="{{ pagination.nextPageHref }}">Older <span class="visually-hidden">posts</span></a>
      </li>
    {%- endif %}
    {%- if pagination.previousPageHref -%}
      <li class="pagination__list-item">
        <a href="{{ pagination.previousPageHref }}">Newer <span class="visually-hidden">posts</span></a>
        <i aria-hidden="true">&rarr;</i>
      </li>
    {%- endif %}
  </ul>
</nav>
