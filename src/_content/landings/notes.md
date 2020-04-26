---
title: "Notes"
summary: "Quick notes, thoughts and ramblings."
bodyClass: "notes-home"
date: 2020-02-22T22:10:00
---

{{ summary }}

---

<ul class="[ wrapper flow ] [ note__list ]">
{%- for note in collections.postNotes -%}
  <li class="[ note__list-item ]">
    <article class="[ wrapper flow ] [ note__summary ]">
      <a href="{{ note.url }}">
        <time datetime="{{ note.date | dateTime }}">{{ note.date | dateTimeReadable("d LLLL y, ") }}{{ note.date | dateTimeReadable("t") | lower }}</time>
      </a>
      {{ note.templateContent | safe | trim }}
    </article>
  </li>
{%- endfor -%}
</ul>
