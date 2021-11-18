---
title: "You're offline"
# Populates the `meta description` for a page
summary: "It looks like you're offline."
# Populates the opening / `lead` text on a page
lead:
  - "It looks like you're offline. Fingers-crossed your connection to the internet will be sorted out soon."
bodyClass: "offline"

date: 2020-05-01T14:43:00
updated: 2021-09-07T13:52:00

hidden: true
eleventyExcludeFromCollections: true
---

Why not visit one of these other posts. They're available to read while you're offline.

---

<ul class="wrapper | flow">
  {%- set allPosts = collections.post | reverse -%}
  {# Shows the latest 5 `post` entries... #}
  {%- for item in allPosts.slice(0, 5) -%}
  <li>
    <article>
      <h2><a href="{{ item.url | pretty }}">{{ item.data.title | safe }}</a></h2>
      <time datetime="{{ item.date | dateTime }}">{{ item.date | dateTimeReadable("d LLLL y, ") }}{{ item.date | dateTimeReadable("t") | lower }}</time>
      <p>{{ item.data.summary | safe }}</p>
    </article>
  </li>
  {%- endfor -%}
</ul>
