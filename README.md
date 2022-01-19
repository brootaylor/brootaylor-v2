# Bruce Taylor's website (v2)

[![Netlify Status](https://api.netlify.com/api/v1/badges/712367e5-7510-4813-9a24-5805f092cfa1/deploy-status)](https://app.netlify.com/sites/brootaylorv2/deploys)

This is *version 2* of my personal website. it's live at [brootaylor.com](https://brootaylor.com/)

I've decided to take the scary route (for me anyway) of redesigning and developing my website in the open. I've been inspired by others that have done this and thought it may be an interesting process. Not least because I'm a bit of a perfectionist and doing this may be a good way of weaning me off the need to have things completely polished before showing them. 😱

My hope is this'll be a evolutionary piece of work rather than the usual "WHALA!" moment... so I apologise in advance for things that may look a bit dodgy. Bit by bit I'll be moving all my original content across to this new config. No doubt that means you'll end up on a page that's not there right now. Sorry about that.

I intend to bump my head (a lot!) and learn a fair few things along the way - and am going to try my best to enjoy the *whole* process rather than just looking forward to it being 'finished'.

You're more than welcome to follow along if you're ok with witnessing the inevitable head-scratching and "WT...*" moments 🤪.

Now, I say this gingerly - but I'd be honoured if anyone wanted to contribute any thoughts and pearls of wisdom. All I ask is you be kind. If there's anything you spot that seems dodgy or if you'd like to recommend an enhancement, (and you have the time), you're more than welcome to [summit a GitHub issue](https://github.com/brootaylor/brootaylor-v2/issues).

The website is comprised of static files built using the fabulous [Eleventy](https://www.11ty.io/) (SSG), configurable [NPM](https://docs.npmjs.com/cli/npm) build scripts, global data configuration, [Sass](https://sass-lang.com/) powered CSS system and [rollup.js](https://rollupjs.org/) to bundle JavaScript modules. Much of the content is also available offline thanks to a [Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers).

It's deployed by and hosted with [Netlify](https://www.netlify.com/).

---

## Features

* 🌶 [Progressively enhanced](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement), semantic and accessible
* 🚀 [Performance budgeting](https://github.com/brootaylor/brootaylor-v2/blob/main/config/budget.json)
* 🌐 [Browser support config](https://github.com/brootaylor/brootaylor-v2/blob/main/.browserslistrc)
* ✅ [Accessibility test runner](https://github.com/pa11y/pa11y-ci)
* 🌈 [Sass](https://sass-lang.com/) powered CSS system using the [Dart Sass implementation](https://sass-lang.com/dart-sass) - (utilising modern [custom CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) and methods)
* 🧩 [Design Tokens](https://github.com/brootaylor/brootaylor-v2/tree/main/tokens)
* 🎳 [JS config to handle code-splitting](https://github.com/brootaylor/brootaylor-v2/blob/main/config/rollup.config.js) (ie. splitting code into smaller chunks to be loaded on demand)
* 🎛 [Site & build config](https://github.com/brootaylor/brootaylor-v2/blob/main/netlify.toml)
* 🛄 [Selective build outputs](https://github.com/brootaylor/brootaylor-v2/blob/main/.eleventyignore) using `.eleventyignore`
* ↩️ [Redirects](https://github.com/brootaylor/brootaylor-v2/blob/main/src/_redirects) for local `netlify dev`
* 🌍 [Customisable global data](https://github.com/brootaylor/brootaylor-v2/blob/main/src/_data/site.js)
* 🎨 Page-specific art direction. `head` and `foot` metadata fields enable things like styles, fonts, SVGs & JS
* Dynamically generated...
  * [`serviceworker.js`](https://github.com/brootaylor/brootaylor-v2/blob/main/src/serviceworker.njk)
  * [`manifest.json`](https://github.com/brootaylor/brootaylor-v2/blob/main/src/manifest.njk)
  * [`sitemap.xml`](https://github.com/brootaylor/brootaylor-v2/blob/main/src/sitemap.njk)
  * [`robots.txt`](https://github.com/brootaylor/brootaylor-v2/blob/main/src/robots.njk)
  * [`feed.xml`](https://github.com/brootaylor/brootaylor-v2/blob/main/src/feed.njk)
* [JAMstack](https://jamstack.org/) methodology
* [Eleventy](https://www.11ty.io/) (SSG)
* [Netlify](https://www.netlify.com/)
* 📧 [Netlify contact form](https://docs.netlify.com/forms/setup/)
* ✍️ [Netlify CMS setup](https://www.netlifycms.org/)

---

## Roadmap

Possible features / enhancements for the future:

1.  Light / Dark Theme option
2.  Implement [Cloudinary](https://cloudinary.com/) for images
3.  [IndieWeb](https://indieweb.org/) & [Webmention](https://indieweb.org/Webmention)
4.  Make better use of utility classes
5.  Post read time
6.  Tags / categories
7.  ~~Pagination~~ ✔️
8.  Styleguide (list of the components)

---

## Repo structure

```bash
brootaylor.com
├── config
│   ├── browser-sync.config.js   # BrowserSync configuration
│   ├── budget.json              # Lighthouse performance budget
│   ├── postcss.config.js        # PostCSS converts modern CSS into something most browsers can understand
│   ├── rollup.config.js         # Rollup JS bundling configuration
│
├── lib
│   ├── collections              # Eleventy collections
│   ├── utils                    # Eleventy utility templates (ie. filters, transforms etc.)
│
├── src
│   ├── _content                 # Content (Markdown)
│   ├── _data                    # Global website data (eg. site, messages, navigation & contactform)
│   ├── _includes                # Layout templates, partials & components (Nunjucks, JS & SCSS)
│   ├── admin                    # Netlify CMS config files
│   ├── assets                   # Assets (ie. Static files like Fonts, Images, Video, Favicons)
│   ├── scripts                  # JavaScript (Global)
│   ├── styles                   # SCSS (Global)
│   ├── browserconfig.njk        # browserconfig.xml template (For Microsoft application usage)
│   ├── feed.njk                 # feed.xml template
│   ├── manifest.njk             # manifest.json template
│   ├── robots.njk               # robots.txt template
│   ├── serviceworker.njk        # serviceworker.js template
│   └── sitemap.njk              # sitemap.xml template
│
├── tokens                       # Design tokens directory that holds individual design token JSON files (eg. colors.json)
│
├── .browserlistrc               # Browser support config list
├── .editorconfig                # Text editor configuration
├── .eleventy.js                 # Eleventy configuration
├── .eleventyignore              # Directories / files eleventy needs to ignore when building
├── .eslintignore                # JS folders / files eslint needs to ignore
├── .eslintrc                    # JS linting configuration
├── .gitignore                   # Files not tracked by Git
├── .markdownlint.json           # Markdownlint configuration
├── .nvmrc                       # Sets (and installs if necessary) the version of Node needed for this project
├── .sass-lint.yml               # SCSS linting configuration
├── LICENCE                      # Repo licence (MIT)
├── netlify.toml                 # Netlify configuration (server)
├── package.json                 # Node.js package manifest
├── package-lock.json            # Node.js package lock
└── README.md                    # This file (Instructions and repo information)
```

---

## Getting setup

Instructions for installing all the necessary dependencies and outputting the first build.

```bash
# Clone this repository
git clone git@github.com:brootaylor/brootaylor-v2.git

# Go to the working directory
cd brootaylor-v2

# Install dependencies
npm install

# Start a local build
npm run build

# Start a local build server to view website in the browser
npm run watch
```

## Netlify CI & CD setup

Instructions for installing, creating a [*new Netlify instance*], or linking a local dev instance to an existing remote Netlify site instance.

```bash
# Install the Netlify CLI globally
npm i -g netlify-cli

# Set up the deployment rules => (follow the instructions in this process)
netlify init

# Deploy to Netlify
netlify deploy
```

## Manually building & deploying

```bash
# Deploy to Netlify ("Draft"):
npm run deploy-draft

# then ("Production")...
npm run deploy-production
```

The changes will deploy to the live Netlify instance.

## Auto build & deployment

* My preferred method is to host on [Netlify](http://www.netlify.com)
* This build process runs in a CI environment and then deploys the build automatically to a global CDN.
* Such deployments are [triggered automatically](https://www.netlify.com/docs/continuous-deployment/) by every git push to the `main` branch of the origin repository.

---

## Useful Netlify commands

Here are some other useful Netlify commands that you can run.

```bash
# Opens current site admin UI in Netlify
netlify open:admin

# Opens current site url in default browser
netlify open:site

# Handle various site operations
netlify sites

# Prints status info about the current Netlify user and site
netlify status

# Create a new deploy from the `www` folder (creates a draft URL)
netlify deploy

# Manage netlify functions
# Ref: https://www.netlify.com/tags/functions/
netlify functions

# list installed plugins
# Ref: https://www.netlify.com/tags/plugins/
netlify plugins

# Link local repo or project folder (ie. `www`) to an existing site on Netlify
netlify link

# Unlink local folder (ie. `www`) from a Netlify site
netlify unlink
```

---

## While developing

Here are a few ways to *watch* your code changes (while developing) and getting the browser to automatically refresh - (*locally* or '*live*').

### 1. Watch "local" environment

* Uses browserSync to open a local server
* Various NPM commands run on the `watch` command and output any changes

```bash
npm run watch
```

### 2. Spawn a full "local Netlify" environment

* Detects and runs your site generator - ie. `eleventy`
* Uses rules in local `netlify.toml`
* Makes environment variables available
* Performs edge logic and routing rules
* Compiles and runs cloud functions

```bash
netlify dev
```

### 3. Stream your dev server to a live URL

* Great for collaborative development
* Share your work as you work
* Get instant feedback.

```bash
netlify dev --live
```

---

## Versioning *(before deployment)*

Use commands like the following to automatically update / change the `package.json` *version* number...

```bash
# Generating a "major" version tag (eg. >>1<<.0.0)
npm version major

# Generating a "minor" version tag (eg. 1.>>1<<.0)
npm version minor

# Generating a "patch" version tag (eg. 1.0.>>1<<)
npm version patch
```

```markdown
The `serviceworker.js` file dynamically use the `package.json` version value as its version.
This makes sure a newer version is installed when updated content is deployed.
```

To make the `git commit` more meaningful, add a *message* to the version `major`, `minor` or `patch`.

```bash
# Something like this...
npm version patch -m "Upgraded to version %s. Updated the service worker."
```

## Branching model

This is the branching model I use when version controlling my code.

**Production branch**: `main`

```md
- This is the branch for deploying code ready for release.
- The `release/` branch merges into this branch.
```

**Development branch**: `develop`

```md
- This is the branch where all the development work is gathered.
- The `feature/` branches merge into this branch.
```

**Feature branch**: `feature/`

```md
- The `feature/` branches use `develop` as their parent branch.
- When a feature is complete, it gets merged back into develop.
- Features should never interact directly with main.
```

**Release branch**: `release/`

```md
- Once develop has acquired enough features for a release, (or a predetermined release date is approaching),
  fork a `release/` branch off of `develop`.
- At this point a new `major`, `minor` or `patch` version should be generated. (See "Versioning" section).
- The `release/` branch is then merged into both the `main` (production) and `develop` branches.
- The release branch can then be deleted.
```

**Bugfix branch**: `bugfix/`

```md
- The `bugfix/` branches are used to fix `release/` branches.
```

**Hotfix branch**: `hotfix/`

```md
- The `hotfix/` branches are used to fix the production branch, `main`, without interrupting changes in the development branch.
- Usually used to fix urgent bugs on production, that have a high impact.
- The `hotfix/` branch is then merged into both the `main` (production) and `develop` branches.
```

## Split Test branching

This branching strategy allows me to deploy branch-based (Beta) changes - and then use [Netlify to run the split tests](https://docs.netlify.com/site-deploys/split-testing/).

**Beta test branch**: `beta-test-*`

```md
- These branches are used in the Netlify split tests.
- The beta test branch - eg. `beta-test-1` - is created off the `develop` branch.
- The beta test branches are added/removed in the Netlify deploy context settings.
- When a beta test branch has been tested and approved, it gets merged back into the `develop` branch.
- If the test isn't successful, the branch can be deleted from the repo and removed from the Netlify deploy context settings.
```

**Beta test feature branch**: `feature/beta-test-*/*`

```md
- The beta test 'feature' branches are created off the beta test branch - eg. `feature/beta-test-1/WSB-123` or `feature/beta-test-1/hero-banner`.
- These are features being developed specifically for the relative beta test branch.
- The beta test 'feature' branches are merged back into the beta test branch.
```

## Split Test Tracking

This is useful in determining which branches user's viewed. This placeholder script snippet is currently [injected into the code using Netlify](https://docs.netlify.com/site-deploys/post-processing/snippet-injection/#snippet-injection-ui).

```html
<!-- Placeholder script rendering the 'BRANCH' value (eg. 'beta-test-1') -->
<!-- This is useful when doing Split Testing -->
<!-- This value could be passed into an Analytics call at some stage -->
<script>
  var branch = function() {
    Branch: '{{ BRANCH }}'
  }
</script>
```

## Running audits

```bash
# View list of browsers supported in the development environment (ie. determines which CSS prefixes are generated etc.)
npm run audit:browser-support

# Runs the "pa11y" accessibility checks against the declared URL
npm run audit:accessibility

# Runs a "lighthouse" performance report
npm run audit:performance
```

---

## Helpful tools & references

1. [PWA icon build tool](https://maskable.app/)
2. [Google fonts](https://fonts.google.com/) and [google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/fonts)
3. [Design System Checklist](https://designsystemchecklist.com/)
4. [Design Tokens Generator](https://quinalha.me/design-tokens-generator/)
5. [Using design tokens](https://www.youtube.com/watch?v=wDBEc3dJJV8) (Jina Bolton)
6. [Art direction for static sites](https://daverupert.com/2021/01/art-direction-for-static-sites/)
7. [polyfill.io](https://polyfill.io/v3/)
8. [Colour blindness emulator](http://colororacle.org/)
9. [Fit on a Floppy](https://fitonafloppy.website/)
10. [Devhints.io](https://devhints.io/rollup)
11. [Eleventy Walk Through](https://rphunt.github.io/eleventy-walkthrough/)
12. [SASS guidelines](https://sass-guidelin.es/)
13. [Set up CSS scoping using custom CSS properties](https://css-tricks.com/the-power-and-fun-of-scope-with-css-custom-properties/)
14. [Create a responsive grid layout with no media queries, using CSS Grid](https://andy-bell.design/wrote/create-a-responsive-grid-layout-with-no-media-queries-using-css-grid/)
15. [Using the `article` element correctly](https://www.smashingmagazine.com/2020/01/html5-article-section/)
16. [Selectors & Specificity Explained](https://hugogiraudel.github.io/selectors-explained/)
17. [Generate SassDocs](http://sassdoc.com/)
18. [Generate JSDocs](https://jsdoc.app/)
19. [Request with Intent: Caching Strategies in the Age of PWAs](https://alistapart.com/article/request-with-intent-caching-strategies-in-the-age-of-pwas/) => (Use of service worker rules and modern HTML to render the right media at the right time - **Perfect for heavy media like Images & Video**)
20. [JS config to handle code-splitting](https://philipwalton.com/articles/using-native-javascript-modules-in-production-today/) (ie. splitting code into smaller chunks to be loaded on demand)
21. [Chrome DevTools synced with local file system & local overrides](https://www.youtube.com/watch?v=D_M7LvDvlSg)
22. [Preload, Prefetch And Priorities in Chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)

---

© [Bruce Taylor](https://brootaylorv2.netlify.com/)
