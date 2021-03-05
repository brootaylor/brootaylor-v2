/**
 * Bar module
 */

export default function () {
  // Grouping the console logging
  console.group('Bar Group');

  const helloBar = () => {
    console.log('Hello from Bar.');
  };

  console.groupEnd();

  return helloBar();
}
