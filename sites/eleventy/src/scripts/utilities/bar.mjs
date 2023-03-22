/**
 * 'Bar' module
 */

import { format } from 'date-fns' // Named imports

const helloBarA = () => {
  // Grouping the console logging
  console.groupCollapsed('Bar A Group')
  console.log('Hello from Bar A.')

  /**
   * Date formatting etc.
   */
  const formatDates = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
  console.log('Date has been formatted as...', formatDates)

  console.groupEnd()
}

const helloBarB = () => {
  // Grouping the console logging
  console.groupCollapsed('Bar B Group')
  console.log('Hello from Bar B.')

  /**
   * Date formatting etc.
   */
  const formatDates = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
  console.log('Date has been formatted as...', formatDates)

  console.groupEnd()
}

export { helloBarA, helloBarB }
