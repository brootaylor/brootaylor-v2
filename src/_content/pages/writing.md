---
title: Writing
summary: Here you'll find a few of my thoughts on a variety of things. Some web tech related, some philosophical, some of a religious nature and some just me trying to process something as honestly as I can.
bodyClass: writing-home
date: 2020-02-20
changefreq: daily
priority: 1
---

Here you'll find a few of my thoughts on a variety of things. Some web tech related, some philosophical, some of a religious nature and some just me trying to process something as honestly as I can.

<ul class="[ wrapper flow ] writing__list">
{%- for writing in collections.writing -%}
  <li class="writing__list-item">
    <article class="[ wrapper flow ] writing__summary">
      <h3><a href="{{ writing.url }}">{{ writing.data.title }}</a></h3>
      <time datetime="{{ writing.date | dateLocal }}">{{ writing.date | dateLocalFriendly("d LLLL y, ") }}{{ writing.date | dateLocalFriendly("t") | lower }}</time>
      <p>{{ writing.data.summary }}</p>
    </article>
  </li>
{%- endfor -%}
</ul>
