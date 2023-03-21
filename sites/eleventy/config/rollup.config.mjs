/**
 * rollup.config.mjs logic
 */

// Node modules...
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

// Setting some directory path variables...
const src = './src/'
const dist = './dist/'

// Data...
import site from '../src/_data/site.js'

/**
 * Main script plugin function (rules / logic)
 */
function primaryPlugins() {
  // Setting the plugins...
  const plugins = [
    json(),
    nodeResolve()
  ]

  /**
   * 'Production' environment check
   * "environment" declared in _data/site.js
   */
  if (site.environment === 'production') {
    console.log('Production environment config - minifying JS')
    plugins.push(
      // JS minification
      terser()
    )
  }
  return plugins
}

/**
 * Vendor script plugin function (rules / logic)
 */
function vendorPlugins () {
  // Setting the plugins...
  const plugins = [json(), nodeResolve()]
  return plugins
}

/**
 * Module config for <script type="module">
 * *****************************************
 * NOTE: Uses '.mjs' file extension for the input and output 'main' JS files. Denotes use of native ES6 modules.
 * REFS: https://v8.dev/features/modules#mjs, https://philipwalton.com/articles/using-native-javascript-modules-in-production-today/, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 */
const moduleConfig = {
  input: {
    main: `${src}scripts/main-modules.mjs`
  },
  output: {
    dir: `${dist}scripts/modules`,
    format: 'esm',
    entryFileNames: '[name].mjs',
    chunkFileNames: '[name]-[hash].mjs',
    sourcemap: true
  },
  plugins: primaryPlugins(),
  watch: {
    clearScreen: false
  }
}

/**
 * Legacy config for <script nomodule>
 * ************************************
 * NOTE: Uses '.mjs' file extension for the input - but uses normal '.js' file extension for the output 'main' JS file
 * This output is used by [legacy] browsers that don't understand / support native ES6 modules
 */
const nomoduleConfig = {
  input: {
    'main-nomodules': `${src}scripts/main-nomodules.mjs`
  },
  output: {
    dir: `${dist}scripts/nomodules`,
    format: 'iife',
    entryFileNames: '[name].js',
    sourcemap: true
  },
  plugins: primaryPlugins(),
  watch: {
    clearScreen: false
  }
}

/**
 * `No JS` config
 * ************************************
 * NOTE: This is generated when there isn't any JS needed to be generated for the website
 * This isn't necessary but I like to generate it anyway
 */
const nojsConfig = {
  input: {
    'main-nojs': `${src}scripts/main-nojs.mjs`
  },
  output: {
    dir: `${dist}scripts/nojs`,
    format: 'iife',
    entryFileNames: '[name].js',
    sourcemap: false
  },
  plugins: primaryPlugins(),
  watch: {
    clearScreen: false
  }
}

/**
 * Vendor config for vendor / 3rd party scripts
 * *********************************************
 * This config literally spits out the vendor scripts supplied
 */
const configVendor = {
  input: {
    vendor: `${src}scripts/vendor.mjs`
  },
  output: {
    dir: `${dist}scripts/vendor`,
    format: 'iife',
    entryFileNames: '[name].js',
    sourcemap: true
  },
  plugins: vendorPlugins(),
  watch: {
    clearScreen: false
  }
}

// Create base `configs` variable...
let configs = [ nojsConfig ]

// If JS is being generated for this website then...
if (site.scriptsMain) {
  /**
   * This is the primary `main-module.mjs` JS
   */
  // Update `configs` variable so `nojsConfig` isn't generated...
  configs = [ moduleConfig ]

  /**
   * 'Production' environment check
   * "environment" declared in _data/site.js
   * Therefore, only generate `nomodule.js` when building for production
   */
  if (site.environment === 'production') {
    // Pushing `nomoduleConfig` to the `configs` array...
    configs.push(nomoduleConfig)
  }

  /**
   * Push `configVendor` to array if `scriptsVendor` is `true` in _data/site.js
   */
  if (site.scriptsVendor) {
    // Pushing `configVendor` to the `configs` array...
    configs.push(configVendor)
  }
}

// 'Spits' out / exports the necessary config stuff...
export default configs
