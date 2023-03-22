import { version, name } from '../../package.json';

const versionPrintOut = `${name}.${version}`
console.info('Version: ', versionPrintOut)

// These are the imports...
import { annualSalary, dayRateOutside, dayRateInside } from './utilities/salary' // Named imports
import navigation from '../_includes/components/global/navigation/navigation' // Default import

// Method/s called from ./utilities/salary.mjs
// annualSalary()
// dayRateOutside()
// dayRateInside()

// Method/s called from ./_includes/components/global/navigation/navigation.mjs
// navigation()
