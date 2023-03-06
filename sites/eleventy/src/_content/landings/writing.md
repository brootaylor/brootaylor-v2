---
title: "Writing"
# Populates the `meta description` for a page
summary: "My thoughts and musings on a variety of things. Some web-tech related, some philosophical, some of a religious nature and some just me trying to process something as honestly as I can."
# Populates the opening / `lead` text on a page
lead:
  - "My thoughts and musings on a variety of things. Some web-tech related, some philosophical, some of a religious nature and some just me trying to process something as honestly as I can."
bodyClass: "blog-list writing-home"

permalink: "{% if pagination.pageNumber > 0 %}/writing/{{ pagination.pageNumber + 1 }}/index.html{% else %}/writing.html{% endif %}"

pagination:
  data: collections.postWriting # This data is called using the `postWriting.js` collection script
  size: 15
  alias: writings

date: 2022-09-21T22:34:00
---

{# List of writing posts #}
<ul role="list" class="writing__list | no-list | flow">
{% for writing in writings %}
  <li class="writing__list-item">
    <article class="writing__summary | flow">
      <h2><a href="{{ writing.url }}">{{ writing.data.title | safe }}</a></h2>
      <time datetime="{{ writing.date | dateTime }}">{{ writing.date | dateTimeReadable("d LLLL y, ") }}{{ writing.date | dateTimeReadable("t") | lower }}</time>
      {%- if writing.data.lead -%}
        <p>{{ writing.data.lead | safe }}</p>
      {% else %}
        <p>{{ writing.data.summary | safe }}</p>
      {%- endif -%}
    </article>
  </li>
{% endfor -%}
</ul>

{# Pagination component --> (Maybe export this to its own component at some stage) #}
<nav class="pagination">
  <h3 class="visually-hidden">Pagination for writing posts</h3>
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
