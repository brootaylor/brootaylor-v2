import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

const src = './src/'
const dist = './dist/'


const moduleConfig = {
  input: {
    main: `${src}scripts/main-module.mjs`
  },
  output: [
    {
      dir: `${dist}scripts/main.module`,
      format: 'esm',
      entryFileNames: '[name].mjs',
      chunkFileNames: '[name]-[hash].mjs',
      sourcemap: true
    },
    {
      dir: `${dist}scripts/main.module`,
      format: 'esm',
      entryFileNames: '[name].min.mjs',
      chunkFileNames: '[name]-[hash].min.mjs',
      sourcemap: true,
      plugins: [terser()]
    }
  ],
  plugins: [json()]
}


const nomoduleConfig = {
  input: `${src}scripts/main-nomodule.mjs`,
	output: [
		{
			file: `${dist}scripts/nomodule-bundle.js`,
			format: 'cjs'
		},
		{
			file: `${dist}scripts/nomodule-bundle.min.js`,
			format: 'iife',
			name: 'version',
			plugins: [terser()]
		}
	],
	plugins: [json()]
}

// Create base `configs` variable...
let configs = [moduleConfig]

// 'Spits' out the necessary config stuff...
export default configs
