---
title: "Photos"
# Populates the `meta description` for a page
summary: "Some photos I've taken along the way."
bodyClass: "photos-home"

permalink: "{% if pagination.pageNumber > 0 %}/photos/{{ pagination.pageNumber + 1 }}/index.html{% else %}/photos.html{% endif %}"

pagination:
  data: collections.postPhotos # This data is called using the `postPhotos.js` collection script
  size: 25
  alias: photos

date: 2022-04-07T17:23:00
---

{# List of photo posts #}
<ul role="list" class="photos__list | auto-grid | no-list">
{% for photo in photos -%}
  <li class="photos__list-item">
    <h2 class="visually-hidden">{{ photo.data.title }}</h2>
    <a href="{{ photo.url }}">
      <picture>
        <source type="image/webp" srcset="{{ photo.data.image.srcWebp }}">
        <source type="image/jpeg" srcset="{{ photo.data.image.srcJpg }}">
        <img src="{{ photo.data.image.srcJpg }}"
          alt="{{ photo.data.image.alt }}."
          width="{{ photo.data.image.width }}"
          height="{{ photo.data.image.height }}"
          class="obj-fit"
          {%- if photo.data.image.lazyLoad %}
            loading="lazy"
            decoding="async"
          {% endif %}>
          {%- if photo.data.image.multiple %}{% include "components/core/icons/svg_inline/icon--photos.njk" %}{% endif -%}
      </picture>
    </a>
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
