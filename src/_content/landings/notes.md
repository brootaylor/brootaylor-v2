---
title: "Notes"
summary: "Quick notes, thoughts and ramblings."
lead: "Quick notes, thoughts and ramblings."
bodyClass: "notes-home"

date: 2020-02-22T22:10:00
updated: 2020-05-11T17:29:00
---

<ul class="[ notes__list ] [ flow ]">
{%- for note in collections.postNotes -%}
  <li class="[ notes__list-item ]">
    <article class="[ note__summary ] [ flow ]">
      <a href="{{ note.url }}">
        <time datetime="{{ note.date | dateTime }}">{{ note.date | dateTimeReadable("d LLLL y, ") }}{{ note.date | dateTimeReadable("t") | lower }}</time>
      </a>
      {{ note.templateContent | safe | trim }}
    </article>
  </li>
{%- endfor -%}
</ul>
