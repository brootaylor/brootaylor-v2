# Bruce Taylor's website (v2)

[![Netlify Status](https://api.netlify.com/api/v1/badges/712367e5-7510-4813-9a24-5805f092cfa1/deploy-status)](https://app.netlify.com/sites/brootaylorv2/deploys)

This is where *version 2* of my personal website is being built. Here's where to see how it's progressing, [brootaylorv2.netlify.com](https://brootaylorv2.netlify.com/). The current version is at [brootaylor.com](https://brootaylor.com)

My hope is this'll be a evolutionary piece of work rather than the usual "WHALA!" moment. I intend to bump my head (a lot!) and learn a fair few things along the way - and am going to try my best to enjoy the whole process rather than just looking forward to it being '*finished*'.

You're more than welcome to follow along if you're ok with witnessing the inevitable head-scratching and "WT...*" moments 🤪.

I say this gingerly but I'd be honoured if anyone wanted to contribute any thoughts and pearls of wisdom. All I ask is you be kind.

## Roadmap *(at the moment!)*

1. Get as [JAMstack](https://jamstack.org/)-y as possible
2. Build it using a Static Site Generator (SSG) of sorts. Considering...
   * [Eleventy](https://www.11ty.io/) ✔️
   * ~~[Sergey](https://sergey.cool/)~~
3. I don't want to use a task builder like Grunt or Gulp (if I can help it!). Task builders are fab but I'd like to see how far I can go with only using NPM packages and running them from `scripts` in `package.json`.
   * *Maaan that was a long winded way to say something or other* 📜
4. Try using [Design Tokens](https://css-tricks.com/what-are-design-tokens/)
   * *Rather than global and theme-based variable values being hardcoded in my SASS*
     * It's been around for a few years but here's a fab video on [using design tokens](https://www.youtube.com/watch?v=wDBEc3dJJV8) (Jina Bolton)
5. Use *newer* CSS methods like...
   * [Custom CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
   * [Variable fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
   * [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
     * [Inspiration example](https://andy-bell.design/wrote/create-a-responsive-grid-layout-with-no-media-queries-using-css-grid/)
6. [Load CSS asynchronously](https://www.filamentgroup.com/lab/load-css-simpler/)
   * *Trying to minimise the critical path calls that affect the first paint*
7. Use a [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API).
   - *I use a service worker on my current site but may try to enhance this implementation and maybe introduce dynamic versioning*
8. Maybe try integrating [Fractal](https://fractal.build/) into the component build process.
   * *I dig Fractal by the way and have used it on a few projects. It could, however, be a bit overkill for my personal website though...?*
9.  Add a RSS feed.
10. Performance optimisation: Browser/client does HTTP 'roundtrip' to get bundles of code. Typically this is up to 14KB per roundtrip => (**TRY KEEP ROUNDTRIPS TO A MINIMUM**)
11. Deploy (CI & CD) using [Netlify](https://www.netlify.com/)
12. Consider [Going Buildless](https://css-tricks.com/going-buildless/)

## Helpful tools

1. [PWA icon build tool](https://maskable.app/)
2. [Design Tokens Generator](https://quinalha.me/design-tokens-generator/)
3. [polyfill.io](https://polyfill.io/v3/)
