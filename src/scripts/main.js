/**
 * This pulls the 'version' and 'name' values from package.json
 * Defined in rollup.config.js
 */
const version = '{{version}}';
const name = '{{name}}';
const versionPrintOut = name + '.' + version;

console.log('Placeholder main.js file generating this... ', versionPrintOut);
