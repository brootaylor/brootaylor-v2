import { version, name } from '../../package.json';

const versionPrintOut = `${name}.${version}`

console.info(versionPrintOut)

// These are the imports...
import { helloBarA, helloBarB } from './modules/bar' // Named imports
import foo from './modules/foo' // Default import

// Methods called from ./modules/foo.mjs
foo()

// Methods called from ./modules/bar.mjs
helloBarA()
helloBarB()
