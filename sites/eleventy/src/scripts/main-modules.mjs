/**
 * Dynamic module loading
 */

import { version, name } from '../../package.json';

const versionPrintOut = `${name}.${version}`

// Method/s called from ./utilities/salary.mjs
import('./utilities/salary.mjs').then(({ annualSalary, dayRateOutside, dayRateInside }) => {
  console.groupCollapsed('Bruce\'s salary expectations')
    annualSalary()
    dayRateOutside()
    dayRateInside()
  console.groupEnd()
})
