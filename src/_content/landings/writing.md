---
title: "Writing"
summary: "Here you'll find a few of my thoughts on a variety of things. Some web tech related, some philosophical, some of a religious nature and some just me trying to process something as honestly as I can."
lead: "Here you'll find a few of my thoughts on a variety of things. Some web tech related, some philosophical, some of a religious nature and some just me trying to process something as honestly as I can."
bodyClass: "writing-home"

date: 2020-02-22T22:10:00
updated: 2020-05-11T17:29:00
---

<ul class="[ flow ] [ writing__list ]">
{%- for writing in collections.postWriting -%}
  <li class="[ writing__list-item ]">
    <article class="[ writing__summary ]">
      <h2><a href="{{ writing.url }}">{{ writing.data.title }}</a></h2>
      <time datetime="{{ writing.date | dateTime }}">{{ writing.date | dateTimeReadable("d LLLL y, ") }}{{ writing.date | dateTimeReadable("t") | lower }}</time>
      {%- if writing.data.lead -%}
        <p>{{ writing.data.lead }}</p>
      {% else %}
        <p>{{ writing.data.summary }}</p>
      {%- endif -%}
    </article>
  </li>
{%- endfor -%}
</ul>
