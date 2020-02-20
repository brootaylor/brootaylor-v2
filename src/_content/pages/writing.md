---
title: Writing
summary: A bunch of posts.
bodyClass: writing
date: 2020-02-20
changefreq: daily
priority: 1
---

Here you'll find a few of my thoughts on a variety of things. Some web tech related, some philosophical, some of a religious nature and some just me trying to process something as honestly as I can.

<ul>
{%- for article in collections.writing -%}
  <li>
    <h3>{{ article.data.title }}</h3>
    <p>{{ article.data.summary }}</p>
    <a href="{{ article.url }}">{{ article.url }}</a>
  </li>
{%- endfor -%}
</ul>
