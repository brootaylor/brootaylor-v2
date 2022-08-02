/**
 * This pulls the 'version' and 'name' values from package.json
 * Defined in rollup.config.js
 */

const version = '{{version}}'
const name = '{{name}}'
const versionPrintOut = `${name}.${version}`

console.info(versionPrintOut)

/**
 * Dynamic module loading
 */

// Methods called from ./modules/bar.mjs
import('./modules/bar.mjs').then(({ default: bar }) => {
  bar();
});

// Methods called from ./modules/foo.mjs
import('./modules/foo.mjs').then(({ helloFooA, helloFooB }) => {
  helloFooA();
  helloFooB();
});

// Methods called from ./modules/observers.mjs
import('./modules/observers.mjs').then(({ default: observers }) => {
  observers();
});

// Methods called from ./modules/objectFit.mjs
import('./modules/objectFitPolyfill.mjs').then(
  ({ default: objectFitPolyfill }) => {
    objectFitPolyfill()
  }
)

// Methods called from _includes/components/unitscarousel/carousel.mjs
import('../_includes/components/units/carousel/carousel.mjs').then(({ carousel }) => {
  carousel();
});
