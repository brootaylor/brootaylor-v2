---
title: "Styleguide"
# Populates the `meta description` for a page
summary: "A styleguide / pattern library of the elements and components that make up my website."
# Populates the opening / `lead` text on a page
lead:
  - "A styleguide / pattern library of the elements and components that make up my website."
bodyClass: "styleguide"

date: 2020-05-21T11:11:00

hidden: true
eleventyExcludeFromCollections: true
---

{% import "components/core/images/images.njk" as images %}
{% from "components/core/buttons/buttons.njk" import button %}
{% from "components/core/blockquotes/blockquotes.njk" import blockquote %}

## Typography

### Headings

<h1>H1 heading</h1>
<h2>H2 heading</h2>
<h3>H3 heading</h3>
<h4>H4 heading</h4>

### Lead text

<p class="lead">Urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id.</p>

### Normal text

Urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id.

---

## Blockquotes

{% call blockquote('Johnny Knoxville') -%}
  If you're not failing at something then you're not trying hard enough. Failing is part of it. If you're not trying hard enough to even fail, I think you're in trouble. Cause that&hellip; you know&hellip; teaches you more.
{%- endcall %}

---

## Icons

Icon components will show here.

---

## Images

### Normal image

{{ images.imageNormal(
  "/assets/images/featured/featured-img01.jpg",
  "Featured image")
}}

### Multi image

{{ images.imageMulti(
  "/assets/images/featured/featured-img01.jpg",
  "Featured image")
}}

### Normal figure image

{{ images.imageFigure(
  "/assets/images/featured/featured-img01.jpg",
  "Featured image",
  "A starfish on the shore edge")
}}

### Multi figure image

{{ images.imageMultiFigure(
  "/assets/images/featured/featured-img01.jpg",
  "Featured image",
  "A starfish on the shore edge")
}}

---

## Videos

Video components will show here.

---

## Links

[This is some text that's a link](/)

---

## Buttons

{{ button('button', 'button--primary', false, 'This is a submit button') }}

{{ button('link', 'button--primary', '/', 'This is a link button') }}

---

## Lists

List components will show here.

---

## Forms

Form components will show here.

