---
title: "Links"
# Populates the `meta description` for a page
summary: "Links to articles and various things I've enjoyed and found interesting. Technical and non-technical. Quite a few of them offer perspectives / advice I appreciate."
# Populates the opening / `lead` text on a page
lead:
  - "Links to articles and various things I've enjoyed and found interesting. Technical and non-technical. Quite a few of them offer perspectives / advice I appreciate."
bodyClass: "links-home"

date: 2020-02-22T22:10:00
updated: 2021-04-19T14:35:00
---

<ul class="[ links__list ] [ flow ]">
{%- for link in collections.postLinks -%}
  <li class="[ links__list-item ]">
    <article class="[ links__summary ] [ flow ]">
      <h2><a href="{{ link.url }}">{{ link.data.title | safe }}</a></h2>
      <time datetime="{{ link.date | dateTime }}">{{ link.date | dateTimeReadable("d LLLL y, ") }}{{ link.date | dateTimeReadable("t") | lower }}</time>
      <div><span class="[ visually-hidden ]">Original post can be viewed at</span> &rarr; <a href="{{ link.data.linkExternal }}" rel="external">{{ link.data.linkLabel }}</a></div>
    </article>
  </li>
{%- endfor -%}
</ul>
