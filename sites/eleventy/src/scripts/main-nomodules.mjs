import { version, name } from '../../package.json';

const versionPrintOut = `${name}.${version}`

console.info(versionPrintOut)

// These are the imports...
import { helloBarA, helloBarB } from './utilities/bar' // Named imports
import foo from './utilities/foo' // Default import

// Methods called from ./utilities/foo.mjs
foo()

// Methods called from ./utilities/bar.mjs
helloBarA()
helloBarB()
