---
title: "Writing"
# Populates the `meta description` for a page
summary: "Here you'll find a few of my thoughts on a variety of things. Some web tech related, some philosophical, some of a religious nature and some just me trying to process something as honestly as I can."
# Populates the opening / `lead` text on a page
lead:
  - "Here you'll find a few of my thoughts on a variety of things. Some web tech related, some philosophical, some of a religious nature and some just me trying to process something as honestly as I can."
bodyClass: "writing-home"

date: 2020-02-22T22:10:00
updated: 2021-01-11T14:43:00
---

<ul role="list" class="[ writing__list ] [ no-list ] [ flow ]">
{%- for writing in collections.postWriting -%}
  <li class="[ writing__list-item ]">
    <article class="[ writing__summary ]">
      <h2><a href="{{ writing.url }}">{{ writing.data.title | safe }}</a></h2>
      <time datetime="{{ writing.date | dateTime }}">{{ writing.date | dateTimeReadable("d LLLL y, ") }}{{ writing.date | dateTimeReadable("t") | lower }}</time>
      {%- if writing.data.lead -%}
        <p>{{ writing.data.lead | safe }}</p>
      {% else %}
        <p>{{ writing.data.summary | safe }}</p>
      {%- endif -%}
    </article>
  </li>
{%- endfor -%}
</ul>
