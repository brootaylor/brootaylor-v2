---
title: "You're offline"
summary: "It looks like you're offline."
lead: "It looks like you're offline. Fingers-crossed your connection to the internet will be sorted out soon."
bodyClass: "offline"
date: 2020-05-01T14:43:00
hidden: true
eleventyExcludeFromCollections: true
---

Why not visit one of these other articles that are available while you're offline.

---

<ul class="[ wrapper flow ]">
  {%- set allPosts = collections.post | reverse -%}
  {%- for item in allPosts.slice(0, 6) -%}
  <li>
    <article>
      <h2><a href="{{ item.url | pretty }}">{{ item.data.title }}</a></h2>
      <p>{{ item.data.summary }}</p>
    </article>
  </li>
  {%- endfor -%}
</ul>
