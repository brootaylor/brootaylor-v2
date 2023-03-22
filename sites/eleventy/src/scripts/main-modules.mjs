/**
 * Dynamic module loading
 */

import { version, name } from '../../package.json';

const versionPrintOut = `${name}.${version}`
console.info(versionPrintOut)

// Methods called from ./utilities/foo.mjs
import('./utilities/foo.mjs').then(({ default: foo }) => {
  foo()
})

// Methods called from ./utilities/bar.mjs
import('./utilities/bar.mjs').then(({ helloBarA, helloBarB }) => {
  helloBarA();
  helloBarB();
})

// Main navigation component
import('../_includes/components/global/navigation/navigation.mjs').then(({ default: navigation }) => {
  navigation();
})
