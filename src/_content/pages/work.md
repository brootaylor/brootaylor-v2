---
title: "Work"
# Populates the `meta description` for a page
summary: "User-centricity is important to me, which means I particularly enjoy building web interfaces that are usable, accessible, performant, resilient and as future-friendly as possible."
# Populates the opening / `lead` text on a page
lead:
  - 'User-centricity is important to me, which means I particularly enjoy building web interfaces that are usable, accessible, performant, resilient and as future-friendly as possible.'
  - 'Is this something I could possibly help you with? <a href="/contact">Get in touch</a>.'

bodyClass: "work"

date: 2021-06-23T18:38:00
updated: 2021-11-16T17:28:00
---

<section aria-labelledby="portfolio" class="portfolio">

  <h2 id="portfolio">Recent projects</h2>

  <ul role="list" class="auto-grid | no-list">
    <li>
      <article class="card card--stacked | flow">
        <div class="card__visual">
          <img src="https://source.unsplash.com/1600x900/?nature,water" alt="">
        </div>
        <div class="card__content | flow">
          <header class="card__header">
            <h3 class="card__title">IAG Loyalty</h3>
          </header>
          <div class="card__body">
            <p>Fugiat eiusmod ut laborum do laborum velit magna sint. Nostrud in laboris ea minim nostrud esse exercitation commodo sunt laboris nisi ea reprehenderit.</p>
          </div>
        </div>
      </article>
    </li>
    <li>
      <article class="card card--stacked | flow">
        <div class="card__visual">
          <img src="https://source.unsplash.com/1600x900/?nature,mountain" alt="">
        </div>
        <div class="card__content | flow">
          <header class="card__header">
            <h3 class="card__title">Euromoney</h3>
          </header>
          <div class="card__body">
            <p>Fugiat eiusmod ut laborum do laborum velit magna sint. Nostrud in laboris ea minim nostrud esse exercitation commodo sunt laboris nisi ea reprehenderit.</p>
          </div>
        </div>
      </article>
    </li>
  </ul>
</section>

---

<section aria-labelledby="testimonials" class="testimonial">

  <h2 id="testimonials">Nice things people have said</h2>

  <ul role="list" class="auto-grid | no-list">
    <li>
    {% from "components/core/blockquotes/blockquotes.njk" import blockquote %}
    {%- call blockquote('Stephen Scott, Chief Digital Officer, IAG Loyalty') -%}
      Bruce is a true digital native. Starting in the industry back as far as Boo.com and continually striving to push the boundaries of front end code design. He takes it upon himself to continually keep up to date with the latest trends and to apply that to his work to the benefit of whoever he is working for. I have no hesitation in recommending Bruce for any role in which pushing your digital boundaries is at the core of your agenda.
    {%- endcall %}
    </li>
    <li>
    {% from "components/core/blockquotes/blockquotes.njk" import blockquote %}
    {%- call blockquote('Kat Thay, Studio Manager, Pegasus') -%}
      Bruce was an excellent resource for us, taking on additional work when our internal resources were at capacity. He's easy to work with and always turned around work quickly and to a high standard. Bruce quickly became part of the family and overcoming challenges with ease due to his can-do attitude and tireless commitment to projects.
    {%- endcall %}
    </li>
  </ul>
</section>
