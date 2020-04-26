---
title: "Links"
summary: "Links to articles and various things I've enjoyed and found interesting. Technical and non-technical. Quite a few of them offer perspectives / advice I appreciate."
bodyClass: "links-home"
date: 2020-02-22T22:10:00
---

{{ summary }}

---

<ul class="[ wrapper flow ] [ links__list ]">
{%- for link in collections.postLinks -%}
  <li class="[ links__list-item ]">
    <article class="[ wrapper flow ] [ links__summary ]">
      <h2><a href="{{ link.url }}">{{ link.data.title }}</a></h2>
      <time datetime="{{ link.date | dateTime }}">{{ link.date | dateTimeReadable("d LLLL y, ") }}{{ link.date | dateTimeReadable("t") | lower }}</time>
      <p><a href="{{ link.data.linkExternal }}">{{ link.data.linkLabel }}</a></p>
      <p>{{ link.data.lead }}</p>
    </article>
  </li>
{%- endfor -%}
</ul>
