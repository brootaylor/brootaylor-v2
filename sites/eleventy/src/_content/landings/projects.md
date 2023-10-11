---
title: "Projects"
# Populates the `meta description` for a page
summary: "Some projects I've done along the way."
# Populates the opening / `lead` text on a page
lead:
  - I help businesses build web solutions that are user-friendly, responsive, accessible, resilient, and as future-friendly as possible.
  - Need some help with your next project? <a href="/contact">Get in touch</a>.

bodyClass: "projects-home"

permalink: "{% if pagination.pageNumber > 0 %}/projects/{{ pagination.pageNumber + 1 }}/index.html{% else %}/projects.html{% endif %}"

pagination:
  data: collections.postProjects # This data is called using the `postProjects.js` collection script
  size: 25
  alias: projects

date: 2023-10-06T11:43:00
---

<section aria-labelledby="projects-past" class="projects | flow">
  <h2 id="projects-past" tabindex="-1">Selection of projects <a class="header-anchor" href="#projects-past">#</a></h2>
  <ul role="list" class="auto-grid | no-list">
    {% for project in projects -%}
    <li>
      <article class="card card--stacked">
        <div class="card__content">
          <header class="card__header">
            <h3 class="card__title">
              <a href="{{ project.url }}">{{ project.data.title }}</a>
            </h3>
          </header>
          <div class="card__body | flow">
            {%- if project.data.lead -%}
              <p>{{ project.data.lead | safe }}</p>
            {% else %}
              <p>{{ project.data.summary | safe }}</p>
            {%- endif -%}
          </div>
        </div>
      </article>
    </li>
    {% endfor -%}
  </ul>
</section>

{# Pagination component --> (Maybe export this to its own component at some stage) #}
<nav class="pagination">
  <h3 class="visually-hidden">Pagination for photo posts</h3>
  <span class="visually-hidden">Page: {{ pagination.pageNumber + 1 }} of {{ pagination.links | length  }}</span>
  <ul role="list" class="pagination__list | no-list">
    {% if pagination.nextPageHref -%}
      <li class="pagination__list-item">
        <i aria-hidden="true">&larr;</i>
        <a href="{{ pagination.nextPageHref }}">Older <span class="visually-hidden">posts</span></a>
      </li>
    {%- endif %}
    {%- if pagination.previousPageHref -%}
      <li class="pagination__list-item">
        <a href="{{ pagination.previousPageHref }}">Newer <span class="visually-hidden">posts</span></a>
        <i aria-hidden="true">&rarr;</i>
      </li>
    {%- endif %}
  </ul>
</nav>

<section aria-labelledby="testimonials" class="testimonials | flow">
  <h2 id="testimonials" tabindex="-1">Nice things people have said <a class="header-anchor" href="#testimonials">#</a></h2>
  <ul role="list" class="auto-grid | no-list">
    <li>
    {% from "components/core/blockquotes/blockquotes.njk" import blockquote %}
    {%- call blockquote('Stephen Scott, Chief Digital Officer, IAG Loyalty') -%}
      Bruce is a true digital native. Starting in the industry back as far as Boo.com and continually striving to push the boundaries of front end code design. He takes it upon himself to continually keep up to date with the latest trends and to apply that to his work to the benefit of whoever he is working for. I have no hesitation in recommending Bruce for any role in which pushing your digital boundaries is at the core of your agenda.
    {%- endcall %}
    </li>
    <li>
    {% from "components/core/blockquotes/blockquotes.njk" import blockquote %}
    {%- call blockquote('Nicola Crome, Senior Media and Content Marketing Manager, Avios') -%}
      I worked with Bruce for many years at Avios, both within the same team and across projects.<br>
      Bruce was incredibly knowledgeable in website design and development, always came up with great solutions, delivered to a high standard with great attention to detail, and was very easy to work with. He was also able to communicate his technical knowledge in a straightforward way to someone who was not from a technical background.<br>
      I would highly recommend Bruce to any organisation.
    {%- endcall %}
    </li>
    <li>
    {% from "components/core/blockquotes/blockquotes.njk" import blockquote %}
    {%- call blockquote('Kat Thay, Studio Manager, Pegasus') -%}
      Bruce was an excellent resource for us, taking on additional work when our internal resources were at capacity. He's easy to work with and always turned around work quickly and to a high standard. Bruce quickly became part of the family and overcoming challenges with ease due to his can-do attitude and tireless commitment to projects.
    {%- endcall %}
    </li>
    <li>
    {% from "components/core/blockquotes/blockquotes.njk" import blockquote %}
    {%- call blockquote('Paul Davison, Head Of Design, Charanga Music') -%}
      We got Bruce in to to help us develop a front-end boilerplate / component library as we were inundated with projects and needed a safe pair of hands that could help us achieve quality results with minimal supervision. Bruce delivered a high-quality framework that ticks all of the boxes for us. And to top it all he’s a great guy to work with, highly professional, he gets on well with everyone and really cares about his work. I would not hesitate to hire Bruce again.
    {%- endcall %}
    </li>
  </ul>
</section>

---

<section aria-labelledby="expertise" class="expertise | flow">
  <h2 id="expertise" tabindex="-1">The type of work I do <a class="header-anchor" href="#expertise">#</a></h2>
  <ul role="list" class="auto-grid | no-list">
    <li>
      <article>
        <header>
          <h3>Brand identity</h3>
          <p>Always with one eye on creating a holistic experience, I relish the opportunity to help new companies develop their identity, be that by creating a recognisable mark or by developing a broader branding system.</p>
        </header>
      </article>
    </li>
    <li>
      <article>
        <header>
          <h3>Front-end development</h3>
          <p>An advocate of developing services that are fast and accessible to all, I employ pragmatic front-end architectures that progressively enhance semantic HTML with maintainable CSS and unobtrusive JavaScript.</p>
        </header>
      </article>
    </li>
    <li>
      <article>
        <header>
          <h3>Interaction design</h3>
          <p>In looking to create engaging, cohesive and usable experiences, I can take the development of a product from initial conception through to prototyping, usability testing and design implementation.</p>
        </header>
      </article>
    </li>
  </ul>
</section>
