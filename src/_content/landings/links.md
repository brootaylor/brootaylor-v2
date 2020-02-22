---
title: Links
summary: Links to articles and various things I've enjoyed and found interesting. Technical and non-technical. Quite a few of them offer perspectives / advice I appreciate.
bodyClass: links-home
---

{{ summary }}

---

<ul class="[ wrapper flow ] links__list">
{%- for link in collections.links | reverse -%}
  <li class="links__list-item">
    <article class="[ wrapper flow ] links__summary">
      <h2><a href="{{ link.url }}">{{ link.data.title }}</a></h2>
      <time datetime="{{ link.date | dateLocal }}">{{ link.date | dateLocalFriendly("d LLLL y, ") }}{{ link.date | dateLocalFriendly("t") | lower }}</time>
      <p><a href="{{ link.data.linkExternal }}">{{ link.data.linkLabel }}</a></p>
    </article>
  </li>
{%- endfor -%}
</ul>
