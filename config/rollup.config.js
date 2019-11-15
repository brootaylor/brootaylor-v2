// rollup.config.js
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { eslint } from "rollup-plugin-eslint";
import { name, version, homepage, author, license } from '../package.json';

const src = './src/';
const dist = './www/';
const preamble = `/*
* ${name}
* v${version}
* ${homepage}
* Copyright (c) ${new Date().getFullYear()} ${author.name}. Licensed ${license} */`;

// Plugin arrays
const pluginsMain = [
    json(),
    replace({
        delimiters: ['{{', '}}'],
        name,
        version
    }),
    resolve(),
    babel({
        exclude: 'node_modules/**', // only transpile our source code
        presets: [
        [
            '@babel/preset-env',
            {
                modules: 'false',
                targets: {
                    browsers: '> 1%, IE 10, not op_mini all, not dead'
                }
            }
        ]
        ]
    }),
    eslint({
        configFile: 'config/.eslintrc',
        fix: true,
        throwOnError: true
    }),
    commonjs()
];

const pluginsVendor = [
    json(),
    resolve()
];

// If the environment variable equals "production", then the "terser" plugin is added to the plugins array
if(process.env.ELEVENTY_ENV == "production") {
    console.log("Production environment config - minifying JS");
    pluginsMain.push(terser({
        output: { preamble }
    }));
}

export default [

    // Main scripts
    // ================
    {
        input: `${src}scripts/main.js`,
        output: [
            // "iife" format for use in the browser
            {
                name: 'MainScripts', // 'IIFE' bundles require an "output.name"
                file: `${dist}scripts/main.js`,
                format: 'iife',
                sourcemap: true,
            },
            // "cjs" format (aka CommonJS)
            {
                dir: `${dist}scripts/main.cjs`,
                format: 'cjs',
                sourcemap: true,
            },
            // "umd" format (for use by Node applications and bundlers like Webpack)
            {
                name: 'MainScripts', // 'UMD' bundles require an "output.name"
                dir: `${dist}scripts/main.umd`,
                format: 'umd',
                sourcemap: true,
            },
            // "esm" format (aka ES6 modules)
            {
                dir: `${dist}scripts/main.esm`,
                format: 'esm',
                sourcemap: true,
            }
        ],
        plugins: pluginsMain
    },

    // Vendor (3rd party) scripts
    // ===========================
    {
        input: `${src}scripts/vendor.js`,
        output: [
            // "iife" format for use in the browser
            {
                name: 'VendorScripts', // 'IIFE' bundles require an "output.name"
                file: `${dist}scripts/vendor.js`,
                format: 'iife',
                sourcemap: true,
            }
        ],
        plugins: pluginsVendor
    }
];
