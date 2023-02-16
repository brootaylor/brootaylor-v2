---
title: "You're offline"
# Populates the `meta description` for a page
summary: "It looks like you're offline."
# Populates the opening / `lead` text on a page
lead:
  - "It looks like you're offline. Fingers-crossed your connection to the internet will be sorted out soon."
  - "Why not visit one of these other posts. They're available to read while you're offline."
bodyClass: "offline"

date: 2021-12-21T19:34:00

hidden: true
eleventyExcludeFromCollections: true
---

<ul role="list" class="offline__list | no-list | flow">
  {%- set allPosts = collections.post | reverse -%}
  {# Shows the latest 5 `post` entries... #}
  {%- for item in allPosts.slice(0, 5) -%}
  <li class="offline__list-item">
    <article class="offline__summary | flow">
      <h2>
        <a href="{{ item.url | pretty }}">
        {{ item.data.title | safe }}
        {#- Checks whether a `bookmarkAuthor` value has been entered. If so, then the `h2` heading is updated... -#}
        {% if item.data.bookmarkAuthor %} &rarr; {{ item.data.bookmarkAuthor | safe }}{% endif %}
        </a>
      </h2>
      <time datetime="{{ item.date | dateTime }}">{{ item.date | dateTimeReadable("d LLLL y, ") }}{{ item.date | dateTimeReadable("t") | lower }}</time>
      <p>{{ item.data.summary | safe }}</p>
    </article>
  </li>
  {%- endfor -%}
</ul>
