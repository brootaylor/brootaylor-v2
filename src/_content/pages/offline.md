---
title: "You're offline"
summary: "It looks like you're offline."
lead: "It looks like you're offline. Fingers-crossed your connection to the internet will be sorted out soon."
bodyClass: "offline"
date: 2020-04-24T19:33:00
hidden: true
eleventyExcludeFromCollections: true
---

<ul class="[ wrapper flow ]">
  {%- set allPosts = collections.post | reverse -%}
  {% for item in allPosts.slice(0, 6) %}
  <li>
    <a href="{{ item.url | pretty }}">{{ item.data.title }}</a>
    <p>{{ item.data.summary }}</p>
  </li>
  {%- endfor -%}
</ul>

For now, why not <a href="{{ '/' | url }}">head back to the homepage</a>.
