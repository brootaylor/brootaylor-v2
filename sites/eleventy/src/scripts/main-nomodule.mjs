/**
 * This pulls the 'version' and 'name' values from package.json
 * Defined in rollup.config.js
 */

// These are the imports...
import { helloFooA, helloFooB } from './modules/foo' // Named imports
import bar from './modules/bar' // Default import
import observers from './modules/observers' // Default import
import objectFitPolyfill from './modules/objectFitPolyfill' // Default import
import { carousel } from '../_includes/components/units/carousel/carousel' // Named import

const version = '{{version}}'
const name = '{{name}}'
const versionPrintOut = `${name}.${version}`

console.info(versionPrintOut)

// Methods called from ./modules/bar.mjs
bar()

// Methods called from ./modules/foo.mjs
helloFooA()
helloFooB()

// Methods called from ./modules/observers.mjs
observers()

// Methods called from ./modules/objectFitPolyfill.mjs
objectFitPolyfill()

// Method called from _includes/components/units/carousel/carousel.mjs
carousel()
