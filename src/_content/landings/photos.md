---
title: "Photos"
# Populates the `meta description` for a page
summary: "Photos I've snapped along the way."
# Populates the opening / `lead` text on a page
lead:
  - "Photos I've snapped along the way."
bodyClass: "photos-home"

date: 2021-12-29T19:11:00
updated: 2021-12-29T19:11:00
---

<ul role="list" class="photos__list | no-list | auto-grid">
{%- for photo in collections.postPhotos -%}
  <li class="photos__list-item">
    <article class="photo__summary | flow">
      <a href="{{ photo.url }}">
        <time datetime="{{ photo.date | dateTime }}">{{ photo.date | dateTimeReadable("d LLLL y, ") }}{{ photo.date | dateTimeReadable("t") | lower }}</time>
      </a>
      {{ photo.templateContent | safe | trim }}
    </article>
  </li>
{%- endfor -%}
</ul>
