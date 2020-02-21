---
title: Notes
summary: Quick notes, thoughts and ramblings.
bodyClass: notes-home
date: 2020-02-20
changefreq: daily
priority: 1
permalink: /notes.html
eleventyExcludeFromCollections: true
---

Quick notes, thoughts and ramblings.

---

<ul class="[ wrapper flow ] note__list">
{%- for note in collections.notes -%}
  <li class="note__list-item">
    <article class="[ wrapper flow ] note__summary">
      <h2><a href="{{ note.url }}">{{ note.data.title }}</a></h2>
      <time datetime="{{ note.date | dateLocal }}">{{ note.date | dateLocalFriendly("d LLLL y, ") }}{{ note.date | dateLocalFriendly("t") | lower }}</time>
      <p>{{ note.data.summary }}</p>
    </article>
  </li>
{%- endfor -%}
</ul>
