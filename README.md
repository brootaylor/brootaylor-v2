# Bruce Taylor's website (v2)

[![Netlify Status](https://api.netlify.com/api/v1/badges/712367e5-7510-4813-9a24-5805f092cfa1/deploy-status)](https://app.netlify.com/sites/brootaylorv2/deploys)

This is where *version 2* of my personal website is being built. The current version is at [brootaylor.com](https://brootaylor.com)

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
4. Use *newer* CSS methods like...
   * [Custom CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
   * [Variable fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
   * [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
        - [Inspiration example](https://andy-bell.design/wrote/create-a-responsive-grid-layout-with-no-media-queries-using-css-grid/)
5. Use a [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API).
   - *I use a service worker on my current site but may try to enhance this implementation and maybe introduce dynamic versioning*
6. Maybe try integrating [Fractal](https://fractal.build/) into the component build process.
   * *I dig Fractal by the way and have used it on a few projects. It could be a bit overkill for my personal website though...?*
7. Add a RSS feed.
8. Deploy (CI & CD) using [Netlify](https://www.netlify.com/)
