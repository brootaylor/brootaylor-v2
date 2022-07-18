# Scripts

The JS files in this directory are as follows:

* `main-module.mjs`, is the primary JS file that pulls in all the other relevant components and modules. It creates JS for modern browsers using native ES6 modules (ESM). **It's not transpiled with Babel**.
* `main-nomodule.mjs`, is the primary JS file that pulls in all the other relevant components and modules. It creates JS for older browsers and generates a *'normal'* JS output (IIFE). **It's transpiled with Babel**.

The `base.njk` layout file determines the relevant calls as follows:

```html
<!--
  METHOD: native JS modules with legacy browser fallback
  REF: https://philipwalton.com/articles/using-native-javascript-modules-in-production-today/
-->
<!-- Main JS -->
<!-- 1. modern browsers => Using native ES6 modules (ESM). Not transpiled with Babel -->
<script type="module" src="{{ '/scripts/main.module/main.mjs' | url }}"></script>
<!-- 2. older browsers => Using 'normal' JS output (IIFE). Transpiled with Babel -->
<!-- ES6 modules 'defer' by default so adding 'defer' attribute to enable classic JS to load in deferred fashion. -->
<script nomodule defer src="{{ '/scripts/main.nomodule/nomodule.js' | url }}"></script>
```
