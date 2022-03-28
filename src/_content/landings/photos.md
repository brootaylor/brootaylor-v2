---
title: "Photos"
# Populates the `meta description` for a page
summary: "Photos I've taken along the way."
# Populates the opening / `lead` text on a page
lead:
  - "Photos I've taken along the way."
bodyClass: "photos-home"

permalink: "{% if pagination.pageNumber > 0 %}/photos/{{ pagination.pageNumber + 1 }}/index.html{% else %}/photos.html{% endif %}"

pagination:
  data: collections.postPhotos # This data is called using the `postPhotos.js` collection script
  size: 15
  alias: photos

date: 2022-03-28T18:24:00
updated: 2022-03-28T18:24:00
---

{# List of photo posts #}
<ul role="list" class="photos__list | no-list | flow">
{% for photo in photos -%}
  <li class="photos__list-item">
    <article class="photo__summary | flow">
      <a href="{{ photo.url }}">
        <time datetime="{{ photo.date | dateTime }}">{{ photo.date | dateTimeReadable("d LLLL y, ") }}{{ photo.date | dateTimeReadable("t") | lower }}</time>
      </a>
      {{ photo.templateContent | safe | trim }}
    </article>
  </li>
{% endfor -%}
</ul>

{# Pagination component --> (Maybe export this to its own component at some stage) #}
<nav class="pagination">
  <h3 class="visually-hidden">Pagination for photo posts</h3>
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
