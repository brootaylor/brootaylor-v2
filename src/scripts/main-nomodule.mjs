/**
 * This pulls the 'version' and 'name' values from package.json
 * Defined in rollup.config.js
 */

// These are the imports...
// import { helloFooA, helloFooB } from './modules/foo.mjs'; // Named imports
import bar from './modules/bar.mjs'; // Default import
import observers from './modules/observers.mjs'; // Default import
import { carousel } from '../_templates/components/carousel/carousel.mjs'; // Named import

const version = '{{version}}';
const name = '{{name}}';
const versionPrintOut = `${name}.${version}`;

console.info(versionPrintOut);

// Methods called from ./modules/bar.mjs
// bar();

// Methods called from ./modules/foo.mjs
// helloFooA();
// helloFooB();

// Methods called from ./modules/observers.mjs
// observers();

// Method called from _templates/components/carousel/carousel.mjs
// carousel();
