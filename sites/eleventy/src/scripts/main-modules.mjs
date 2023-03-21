/**
 * Dynamic module loading
 */

import { version, name } from '../../package.json';

const versionPrintOut = `${name}.${version}`
console.info(versionPrintOut)

// Methods called from ./modules/foo.mjs
import('./modules/foo.mjs').then(({ default: foo }) => {
  foo()
});

// Methods called from ./modules/bar.mjs
import('./modules/bar.mjs').then(({ helloBarA, helloBarB }) => {
  helloBarA();
  helloBarB();
});
