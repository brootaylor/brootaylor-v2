/**
 * rollup.config.js logic
 */

// Node modules...
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

// Package.json values...
import { name, version, homepage, author, license } from '../package.json';

// Setting some directory path variables...
// Also some 'preamble' values for fun :-)
const src = './src/';
const dist = './www/';
const preamble = `/*
* ${name}
* v${version}
* ${homepage}
* Copyright (c) ${new Date().getFullYear()} ${
  author.name
}. Licensed ${license} */`;

// Data...
const site = require('../src/_data/site.js'); // Using CommonJS 'require' cause site.js using 'module.exports'

/**
 * Main script plugin function (rules / logic)
 * @param {object} nomodule
 * @returns {{ nomodule = false } or {}}
 */
function basePlugins({ nomodule = false } = {}) {
  // Setting browser values for module and nomodule support
  const browsers = nomodule
    ? ['ie 11']
    : [
        // NOTE: `esmodules` target not used due to this issue raised by Philip Walton:
        // https://github.com/babel/babel/issues/8809
        'last 2 Chrome versions',
        'last 2 Safari versions',
        'last 2 iOS versions',
        'last 2 Edge versions',
        'Firefox ESR',
      ];

  // Setting the plugins...
  const plugins = [
    json(),
    replace({
      delimiters: ['{{', '}}'],
      name,
      version,
    }),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'false',
            targets: { browsers },
          },
        ],
      ]
    }),
    resolve(),
    commonjs(),
  ];

  /**
   * 'Production' environment check
   * "environment" declared in _data/site.js
   */
  if (site.environment === 'production') {
    console.log('Production environment config - minifying JS');
    plugins.push(
      // Remove 'console.*' messages from JS compiled output
      babel({
        plugins: ['transform-remove-console']
      }),
      // JS minification
      terser({
        output: { preamble },
        module: !nomodule,
      })
    );
  }
  return plugins;
}

/**
 * Vendor script plugin function (rules / logic)
 */
function vendorPlugins() {
  // Setting the plugins...
  const plugins = [
    json(),
    resolve()
  ];
  return plugins;
}

/**
 * Module config for <script type="module">
 * *****************************************
 * NOTE: Uses '.mjs' file extension for the input and output 'main' JS files. Denotes use of native ES6 modules.
 * REFS: https://v8.dev/features/modules#mjs, https://philipwalton.com/articles/using-native-javascript-modules-in-production-today/, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 */
const moduleConfig = {
  input: {
    'main': `${src}scripts/main-module.mjs`,
  },
  output: {
    dir: `${dist}scripts/main.module`,
    format: 'esm',
    entryFileNames: '[name].mjs',
    chunkFileNames: '[name]-[hash].mjs',
    sourcemap: true,
  },
  plugins: basePlugins(),
  watch: {
    clearScreen: false,
  },
};

/**
 * Legacy config for <script nomodule>
 * ************************************
 * NOTE: Uses '.mjs' file extension for the input - but uses normal '.js' file extension for the output 'main' JS file
 * This output is used by [legacy] browsers that don't understand / support native ES6 modules
 */
const nomoduleConfig = {
  input: {
    'nomodule': `${src}scripts/main-nomodule.mjs`,
  },
  output: {
    dir: `${dist}scripts/main.nomodule`,
    format: 'iife',
    entryFileNames: '[name].js',
    sourcemap: true,
  },
  plugins: basePlugins({ nomodule: true }),
  watch: {
    clearScreen: false,
  },
};

/**
 * Vendor config for vendor / 3rd party scripts
 * *********************************************
 * This config literally spits out the vendor scripts supplied
 */
const configVendor = {
  input: {
    'vendor': `${src}scripts/vendor.js`,
  },
  output: {
    dir: `${dist}scripts/vendor`,
    format: 'iife',
    entryFileNames: '[name].js',
    sourcemap: true,
  },
  plugins: vendorPlugins(),
  watch: {
    clearScreen: false,
  },
};

const configs = [moduleConfig, configVendor];

/**
 * 'Production' environment check
 * "environment" declared in _data/site.js
 */
if (site.environment === 'production') {
  configs.push(nomoduleConfig);
}

// 'Spits' out the necessary config stuff...
export default configs;
