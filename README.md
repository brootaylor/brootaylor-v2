# Bruce Taylor's website (v2)

[![Netlify Status](https://api.netlify.com/api/v1/badges/712367e5-7510-4813-9a24-5805f092cfa1/deploy-status)](https://app.netlify.com/sites/brootaylorv2/deploys)

This is where *version 2* of my personal website is being built. Here's where to see how it's progressing, [brootaylorv2.netlify.com](https://brootaylorv2.netlify.com/). The current version is at [brootaylor.com](https://brootaylor.com)

My hope is this'll be a evolutionary piece of work rather than the usual "WHALA!" moment. I intend to bump my head (a lot!) and learn a fair few things along the way - and am going to try my best to enjoy the whole process rather than just looking forward to it being '*finished*'.

You're more than welcome to follow along if you're ok with witnessing the inevitable head-scratching and "WT...*" moments 🤪.

I say this gingerly but I'd be honoured if anyone wanted to contribute any thoughts and pearls of wisdom. All I ask is you be kind.


The website is comprised of static files built using [Eleventy](https://www.11ty.io/), [NPM](https://docs.npmjs.com/cli/npm) `scripts` defined in `package.json` as well as [rollup.js](https://rollupjs.org/) to bundle JavaScript modules. It is deployed by and hosted with [Netlify](https://www.netlify.com/).

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

Instructions for installing, creating a [new Netlify instance], or linking a local dev instance to an existing remote Netlify site instance.

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

## Auto build & deployment *(prefered method)*

* My preferred method is to host on [Netlify](http://www.netlify.com)
* This build process runs in a CI environment and then deploys the build automatically to a global CDN.
* Such deployments are [triggered automatically](https://www.netlify.com/docs/continuous-deployment/) by every git push to the `master` branch of the origin repository.


## While developing

How to *watch* the code changes (while developing) and getting the browser to automatically refresh.

```bash
# Watch "local" environment
npm run watch

# Watch "local" environment => (using local Netlify rules in netlify.toml)
npm run netlify-dev:local

# Watch "live" environment => (links to Netlify remote instance)
npm run netlify-dev:live
```

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

**Production branch**: `master`

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
- Features should never interact directly with master.
```

**Release branch**: `release/`

```md
- Once develop has acquired enough features for a release, (or a predetermined release date is approaching),
  fork a `release/` branch off of `develop`.
- At this point a new `major`, `minor` or `patch` version should be generated. (See "Versioning" section).
- The `release/` branch is then merged into both the `master` (production) and `develop` branches.
- The release branch can then be deleted.
```

**Bugfix branch**: `bugfix/`

```md
- The `bugfix/` branches are used to fix `release/` branches.
```

**Hotfix branch**: `hotfix/`

```md
- The `hotfix/` branches are used to fix the production branch, `master`, without interrupting changes in the development branch.
- Usually used to fix urgent bugs on production, that have a high impact.
- The `hotfix/` branch is then merged into both the `master` (production) and `develop` branches.
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

## Repo structure

```bash
brootaylor.com
├── config
│   ├── browser-sync.config.js   # BrowserSync configuration
│   ├── budget.json              # Lighthouse performance budget
│   ├── postcss.config.js        # PostCSS converts modern CSS into something most browsers can understand
│   ├── rollup.config.js         # Rollup JS bundling configuration
│
├── src
│   ├── _content                 # Content (Front Matter & Markdown)
│   ├── _data                    # Global website data (eg. site, navigation & design tokens)
│   ├── _templates               # Layout templates, collections, partials & components (Nunjucks, JS & SCSS)
│   ├── assets                   # Assets (Fonts, Images, Video, Favicons, Web App Manifest template)
│   ├── scripts                  # JavaScript (Global)
│   ├── styles                   # SCSS (Global)
│   ├── utils                    # Eleventy utility templates (ie. filters, transforms etc.)
│   ├── browserconfig.xml.njk    # browserconfig.xml template (For Microsoft application usage)
│   ├── manifest.json.njk        # manifest.json template
│   ├── robots.txt.njk           # robots.txt template
│   ├── serviceworker.js.njk     # serviceworker.js template
│   └── sitemap.xml.njk          # sitemap.xml template
│
├── .browserlistrc               # Browser support config list
├── .editorconfig                # Text editor configuration
├── .eleventy.js                 # Eleventy configuration
├── .eleventyignore              # Files eleventy needs to ignore
├── .eslintignore                # JS folders/files eslint needs to ignore
├── .eslintrc                    # JS linting configuration
├── .gitignore                   # Files not tracked by Git
├── .markdownlint.json           # Markdownlint configuration
├── .sass-lint.yml               # SCSS linting configuration
├── LICENCE                      # Repo licence
├── netlify.toml                 # Netlify configuration
├── package.json                 # Node.js package manifest
├── package-lock.json            # Node.js package lock
└── README.md                    # This file (Instructions and repo information)
```

---

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
6. Use CSS Grid to handle entire page layout (column & row) rules. eg. assign `display: grid` to the `<body>` element => (**NOTE:** Don't use a typical type grid set up. Use CSS Grid and Flexbox rules [in `@support` feature queries where necessary] to handle section-by-section and component-by-component layout
6. [Load CSS asynchronously](https://www.filamentgroup.com/lab/load-css-simpler/)
   * *Trying to minimise the critical path calls that affect the first paint*
7. Use a [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API).
   - *I use a service worker on my current site but may try to enhance this implementation and maybe introduce dynamic versioning*
8.  Add a RSS feed.
9.  Deploy (CI & CD) using [Netlify](https://www.netlify.com/)
10. Add a [Netlify form](https://docs.netlify.com/forms/setup/) for contact form.
11. Environment & language/locale config to determine applicable data
12. Dynamically populate the `manifest.json` file => (Pull from `site.json`)
13. Create a config to generate a styleguide (list of the components)
14. Consider [Going Buildless](https://css-tricks.com/going-buildless/)

❗️Performance: Browser/client does HTTP 'roundtrip' to get bundles of code. Typically this is up to **14KB** per roundtrip => (**TRY KEEP ROUNDTRIPS TO A MINIMUM**)

---

## Helpful tools & references

1. [PWA icon build tool](https://maskable.app/)
2. [Design System Checklist](https://designsystemchecklist.com/)
3. [Design Tokens Generator](https://quinalha.me/design-tokens-generator/)
4. [polyfill.io](https://polyfill.io/v3/)
5. [Colour blindness emulator](http://colororacle.org/)
6. [Fit on a Floppy](https://fitonafloppy.website/)
7. [Devhints.io](https://devhints.io/rollup)
8. [SASS guidelines](https://sass-guidelin.es/)
9. [Set up CSS scoping using custom CSS properties](https://css-tricks.com/the-power-and-fun-of-scope-with-css-custom-properties/)
10. [Using the `article` element correctly](https://www.smashingmagazine.com/2020/01/html5-article-section/)
11. [Generate SassDocs](http://sassdoc.com/)
12. [Generate JSDocs](https://jsdoc.app/)
13. [Request with Intent: Caching Strategies in the Age of PWAs](https://alistapart.com/article/request-with-intent-caching-strategies-in-the-age-of-pwas/) => (Use of service worker rules and modern HTML to render the right media at the right time - **Perfect for heavy media like Images & Video**)
14. [JS config to handle code-splitting](https://philipwalton.com/articles/using-native-javascript-modules-in-production-today/) (ie. splitting code into smaller chunks to be loaded on demand)

---

© [Bruce Taylor](https://brootaylorv2.netlify.com/)
