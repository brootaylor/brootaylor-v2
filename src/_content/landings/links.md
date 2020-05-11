---
title: "Links"
summary: "Links to articles and various things I've enjoyed and found interesting. Technical and non-technical. Quite a few of them offer perspectives / advice I appreciate."
lead: "Links to articles and various things I've enjoyed and found interesting. Technical and non-technical. Quite a few of them offer perspectives / advice I appreciate."
bodyClass: "links-home"

date: 2020-02-22T22:10:00
updated: 2020-05-11T17:29:00
---

<ul class="[ flow ] [ links__list ]">
{%- for link in collections.postLinks -%}
  <li class="[ links__list-item ]">
    <article class="[ flow ] [ links__summary ]">
      <h2><a href="{{ link.url }}">{{ link.data.title }}</a></h2>
      <time datetime="{{ link.date | dateTime }}">{{ link.date | dateTimeReadable("d LLLL y, ") }}{{ link.date | dateTimeReadable("t") | lower }}</time>
      <span> &rarr; <a href="{{ link.data.linkExternal }}" rel="external">{{ link.data.linkLabel }}</a></span>
      {%- if link.data.lead -%}
        <p>{{ link.data.lead }}</p>
      {% else %}
        <p>{{ link.data.summary }}</p>
      {%- endif -%}
    </article>
  </li>
{%- endfor -%}
</ul>
