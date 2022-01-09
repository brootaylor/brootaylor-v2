---
title: "Notes"
# Populates the `meta description` for a page
summary: "Quick notes, thoughts and ramblings."
# Populates the opening / `lead` text on a page
lead:
  - "Quick notes, thoughts and ramblings."
bodyClass: "notes-home"

permalink: "{% if pagination.pageNumber > 0 %}/notes/{{ pagination.pageNumber + 1 }}/index.html{% else %}/notes.html{% endif %}"
# permalink: "/notes/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber + 1 }}/index.html{% else %}/notes.html{% endif %}"

pagination:
  data: collections.notes
  size: 10
  reverse: true
  alias: noteslist

date: 2020-02-22T22:10:00
updated: 2021-07-16T18:44:07
---

<ul role="list" class="notes__list | no-list | flow">
{%- for note in noteslist -%}
  <li class="notes__list-item">
    <article class="note__summary | flow">
      <a href="{{ note.url }}">
        <time datetime="{{ note.date | dateTime }}">{{ note.date | dateTimeReadable("d LLLL y, ") }}{{ note.date | dateTimeReadable("t") | lower }}</time>
      </a>
      {{ note.templateContent | safe | trim }}
    </article>
  </li>
{%- endfor -%}
</ul>

<!-- Pagination links -->
<div class="page-selector">
  {%- if pagination.nextPageHref -%}
    <a href="{{ pagination.nextPageHref }}" class="page-numbers">
      Older
    </a>
  {% else %}
    <!-- <span class="page-numbers">Older</span> -->
  {% endif %}
  <span class="page-numbers ">
    <span class="visually-hidden">Page: {{ pagination.pageNumber + 1 }} of {{ pagination.links | length  }}</span>
  </span>
  {%- if pagination.previousPageHref -%}
    <a href="{{ pagination.previousPageHref }}" class="page-numbers">Newer</a>
  {% else %}
    <!-- <span class="page-numbers">Newer</span> -->
  {% endif %}
</div>
