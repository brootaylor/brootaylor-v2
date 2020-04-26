/**
 * This pulls the 'version' and 'name' values from package.json
 * Defined in rollup.config.js
 */

const version = '{{version}}';
const name = '{{name}}';
const versionPrintOut = `${name}.${version}`;

console.info(versionPrintOut);

console.info("No JS being generated for this website at the moment.")
